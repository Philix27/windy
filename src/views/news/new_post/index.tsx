import React from "react";
import styles from "./styles.module.scss";
import { BiComment } from "react-icons/bi";
import HomeWrapper from "../comps/wrapper";

export default function NewTweet() {
  // return <HomeWrapper>{...ListOfPosts}</HomeWrapper>;
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.form}>
          <textarea
            placeholder="Unwind your thoughts"
            maxLength={255}
          ></textarea>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}
