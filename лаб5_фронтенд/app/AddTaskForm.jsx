"use client";

import { useState } from "react";
import styles from "./page.module.css";
export default function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = value.trim();
    if (!name) return;
    onAddTask(name);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputGroup}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите задачу..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
