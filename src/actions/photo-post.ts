"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { State } from "@/interfaces/form";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoPost(state: State, formData: FormData) {
  const token = cookies().get("token")?.value;

  const name = formData.get("nome") as string | null;
  const age = formData.get("idade") as string | null;
  const weight = formData.get("peso") as string | null;
  const img = formData.get("img") as File;
  const URL = PHOTO_POST();

  try {
    if (!token) throw new Error("Token not found");

    if (!name || !age || !weight || img.size === 0)
      throw new Error("Fill al fields");

    const response = await fetch(URL, {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!response.ok) throw new Error("Error on send photo. ");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("photos");
  redirect("/account");
}
