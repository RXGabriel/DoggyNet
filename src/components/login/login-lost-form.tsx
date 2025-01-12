"use client";

import passwordLost from "@/actions/password-lost";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-label="Send login link">
      {pending ? "Saving..." : "Send login link"}
    </Button>
  );
}

export default function LoginLostForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = useState("");

  useEffect(() => setUrl(window.location.href.replace("lost", "reset")), []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Email / User" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? <p style={{ color: "#4c1" }}>Email sent</p> : <FormButton />}
    </form>
  );
}
