"use server";

import { TOKEN_VALIDATE_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function validateToken() {
  try {
    const URL = TOKEN_VALIDATE_POST();
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Make sure you are logged in");

    const response = await fetch(URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    if (!response.ok) throw new Error("Error on validate token");

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
