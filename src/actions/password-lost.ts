"use server";

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { State } from "@/interfaces/form";

export default async function passwordLost(state: State, formData: FormData) {
  const login = formData.get("login") as string | null;
  const urlLost = formData.get("url") as string | null;
  const URL = PASSWORD_LOST();

  try {
    if (!login) throw new Error("Email or user not found");
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, url: urlLost }),
    });

    if (!response.ok) throw new Error("Email or user not found");

    return { ok: true, error: "", data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
