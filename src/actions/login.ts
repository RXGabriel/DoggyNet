"use server";
import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { State } from "@/interfaces/form";
import { cookies } from "next/headers";

export default async function login(state: State, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const URL = TOKEN_POST();

  try {
    if (!username || !password) throw new Error("Fill all fields");
    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Invalid username or password");

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { ok: true, error: "", data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
