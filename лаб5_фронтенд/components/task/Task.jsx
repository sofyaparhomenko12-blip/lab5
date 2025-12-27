"use client";

import styles from "./task.module.css";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li
      className={`${styles.item} ${
        task.isComplete ? styles.completed : ""
      }`}
    >
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.isComplete}
          onChange={() => onToggleTask(task.id)}
        />
        <span className={styles.name}>{task.name}</span>
      </label>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        Удалить
      </button>
    </li>
  );
}