import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../../comp/button/button";

interface IProps {
  title: string;
  subtitle: string;
  img_url: string;
}
export default function HomeElaborate(data: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
          {<Button />}
        </div>
        <div className={styles.image_section}>
          <img src={data.img_url} />
        </div>
      </div>
    </div>
  );
}
