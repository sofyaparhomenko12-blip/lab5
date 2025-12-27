"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./page.module.css";
import TaskList from "@/components/task-list/TaskList";
import AddTaskForm from "./AddTaskForm";

const initialTasks = [
  {
    id: uuidv4(),
    name: "Сдать сессию",
    isComplete: false,
  },
  {
    id: uuidv4(),
    name: "Встретить Новый год",
    isComplete: false,
  },
  {
    id: uuidv4(),
    name: "Получить стипендию",
    isComplete: true,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (name) => {
    if (!name.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: uuidv4(), name, isComplete: false },
    ]);
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const today = new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className={styles.page}>
      <div className={styles.snowLayer} />
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Новогодний еженевник</h1>
            <p className={styles.subtitle}>{today}</p>
          </div>
          <div className={styles.badge}>2025 🎄</div>
        </header>

        <section className={styles.moodRow}>
          <span className={styles.moodLabel}>Настроение:</span>
          <span className={styles.moodValue}>зимняя магия ✨</span>
        </section>

        <AddTaskForm onAddTask={handleAddTask} />

        <section className={styles.listSection}>
          <h2 className={styles.sectionTitle}>Список задач</h2>
          <TaskList
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </section>
      </div>
    </main>
  );
}
