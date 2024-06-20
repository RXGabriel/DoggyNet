"use server";

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { State } from "@/interfaces/form";
import { redirect } from "next/navigation";

export default async function passwordReset(state: State, formData: FormData) {
  const password = formData.get("password") as string | null;
  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const URL = PASSWORD_RESET();

  try {
    if (!login || !key || !password) throw new Error("Fill all fields");

    if (password.length < 6)
      throw new Error("Password must be at least 6 characters long");

    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Not authorized to reset password");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("/login");
}
