import React from "react";
import styles from "./styles.module.scss";
import { RiAddFill } from "react-icons/ri";

export default function NewsBottomSheet() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <RiAddFill />
        <RiAddFill />
        <RiAddFill />
        <RiAddFill />
      </div>
    </div>
  );
}
