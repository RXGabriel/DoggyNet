"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { State } from "@/interfaces/form";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoPost(state: State, formData: FormData) {
  const token = cookies().get("token")?.value;

  const nome = formData.get("nome") as string | null;
  const idade = formData.get("age") as string | null;
  const peso = formData.get("weight") as string | null;
  const img = formData.get("img") as File;
  const URL = PHOTO_POST();

  try {
    if (!token) throw new Error("Token not found.");

    if (!nome || !idade || !peso || img.size === 0)
      throw new Error("Fill all fields");

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error uploading photo: ${errorText}`);
      throw new Error(`Error on upload photo: ${response.statusText}`);
    }
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("photos");
  redirect("/account");
}
