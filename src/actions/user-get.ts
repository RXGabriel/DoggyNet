"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
import { User } from "@/interfaces/user";

export default async function userGet() {
  const URL = USER_GET();

  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Token not found");

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error("Error on get user");
    const data = (await response.json()) as User;
    return { ok: true, error: "", data };
  } catch (error: unknown) {
    return apiError(error);
  }
}
