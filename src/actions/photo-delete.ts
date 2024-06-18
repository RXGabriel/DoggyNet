"use server";

import { PHOTO_DELETE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;
  const URL = PHOTO_DELETE(id);

  try {
    if (!token) throw new Error("Token not found");
    const response = await fetch(URL, {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Error on delete photo");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("photos");
  redirect("/account");
}
