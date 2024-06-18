"use server";

import { STATS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { PhotoStatsData } from "@/interfaces/photo";
import { cookies } from "next/headers";

export default async function photosGet() {
  try {
    const URL = STATS_GET();
    const token = cookies().get("token")?.value;
    const response = await fetch(URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });

    if (!token) throw new Error("Token not found");
    if (!response.ok) throw new Error("Error on get photos");

    const data = (await response.json()) as PhotoStatsData[];

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
