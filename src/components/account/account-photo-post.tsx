"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import { ChangeEvent, useState } from "react";
import styles from "./account-photo-post.module.css";
import photoPost from "@/actions/photo-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-label="Send">
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}

export default function AccountPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });
  const [img, setImg] = useState("");

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input label="Name" name="nome" type="text" />
        <Input label="Weight" name="peso" type="number" />
        <Input label="Age" name="idade" type="number" />

        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div>
        {img && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}
