export default function apiError(error: unknown): {
  ok: false;
  error: string;
  data: null;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return { data: null, ok: false, error: "Unknown Error" };
  }
}
