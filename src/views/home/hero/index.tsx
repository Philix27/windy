import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../../comp/button/button";

interface IProps {
  image_url: string;
}

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src="./images/secure.png" alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>Unwind</h1>
          <p>Unwind your opinions about the world and let nothings stop you.</p>
          {<Button />}
        </div>
      </div>
    </section>
  );
}
