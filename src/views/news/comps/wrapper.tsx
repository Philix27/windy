import React from "react";
import styles from "./styles.module.scss";

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>{children}</div>
    </div>
  );
}
