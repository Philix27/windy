import React from "react";
import styles from "./styles.module.scss";
import { ListOfPosts } from "./post_list";
import { BiComment } from "react-icons/bi";
import HomeWrapper from "../comps/wrapper";
import NewTweet from "../new_post";

export default function NewsPosts() {
  // return <HomeWrapper>{...ListOfPosts}</HomeWrapper>;
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.sidebar1_container}></div>
        <div className={styles.feed_container}>
          <NewTweet />
          {...ListOfPosts}
        </div>
        <div className={styles.sidebar2_container}></div>
      </div>
    </div>
  );
}

export function PostCard(params: {
  username: string;
  title: string;
  note: string;
  time: string;
}) {
  return (
    <div className={styles.post_card}>
      <div className={styles.top_section}>
        <p className={styles.username}>{params.username}</p>
        <p className={styles.time}>{params.time}</p>
      </div>
      <hr />
      <div className={styles.content}>
        <h3>{params.title}</h3>
        <p>{params.note}</p>
      </div>
      <div className={styles.form_element}>
        {/* <BiComment /> */}
        <input type="text" placeholder="Comment" />
      </div>
    </div>
  );
}
