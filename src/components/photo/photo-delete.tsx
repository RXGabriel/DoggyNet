"use client";

import { useState } from "react";
import styles from "./photo-delete.module.css";
import photoDelete from "@/actions/photo-delete";

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      await photoDelete(id);
    }
    setLoading(false);
  }
  return (
    <button className={styles.delete} onClick={handleClick} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
