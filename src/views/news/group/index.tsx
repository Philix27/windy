import React from "react";
import styles from "./styles.module.scss";
import HomeWrapper from "../comps/wrapper";

export default function GroupView() {
  return (
    <HomeWrapper>
      <div className={styles.box}>
        <div>
          <p>Masa</p>
          <p></p>
        </div>
        <div>
          <p>Celo</p>
          <p></p>
        </div>
        <div>
          <p>Social connect</p>
          <p></p>
        </div>
      </div>
    </HomeWrapper>
  );
}
