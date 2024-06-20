"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-label="Sign in">
      {pending ? "Reloading..." : "Sign in"}
    </Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          label="User"
          name="username"
          type="text"
          autoComplete="username"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <Link className={styles.lost} href="/login/lost">
        Forgot password?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Sign up </h2>
        <p>Don't have an account? Sign up</p>
        <Link className="button" href="/login/create">
          Sign up
        </Link>
      </div>
    </>
  );
}
