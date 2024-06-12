/* eslint-disable react/no-unescaped-entities */
"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import styles from "./login-form.module.css";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-label="Sign up">
      {pending ? "Saving..." : "Sign up"}
    </Button>
  );
}

export default function LoginCreateForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="User" name="username" type="text" autoComplete="username" />
      <Input label="Email" name="email" type="email" autoComplete="email" />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
      />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
