import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
