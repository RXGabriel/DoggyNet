"use client";

import passwordReset from "@/actions/password-reset";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./login-form.module.css";

interface LoginResetFormProps {
  keyToken: string;
  login: string;
}

function FormButton() {
  const { pending } = useFormStatus();
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
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form className={styles.form} action={action}>
      <Input type="password" label="Nova Senha" name="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <FormButton />
    </form>
  );
}
