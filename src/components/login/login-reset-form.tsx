"use client";

import { useRouter } from "next/navigation";
import passwordReset from "@/actions/password-reset";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import { useState } from "react";
import styles from "./login-form.module.css";

interface LoginResetFormProps {
  keyToken: string;
  login: string;
}

function FormButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} aria-label="Reset password">
      {pending ? "Resetting..." : "Reset password"}
    </Button>
  );
}

export default function LoginResetForm({
  keyToken,
  login,
}: LoginResetFormProps) {
  const [state, setState] = useState({ pending: false, error: "" });
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setState({ pending: true, error: "" });

    try {
      const result = await passwordReset(
        { ok: true, error: "", data: null },
        formData
      );

      if (!result.ok) {
        setState({ pending: false, error: result.error });
      } else {
        if (typeof result.data === "string") {
          router.push(result.data);
        } else {
          throw new Error("Unexpected response from server");
        }
      }
    } catch (error) {
      setState({
        pending: false,
        error: (error as Error).message || "Unexpected error occurred",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input type="password" label="Nova Senha" name="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <FormButton pending={state.pending} />
      {state.error && <p className={styles.error}>{state.error}</p>}
    </form>
  );
}
