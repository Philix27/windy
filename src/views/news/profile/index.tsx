import React from "react";
import HomeWrapper from "../comps/wrapper";
import styles from "./styles.module.scss";
import { useAccount, useBalance } from "wagmi";

export default function ProfileView() {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address: address });
  return (
    <HomeWrapper>
      <div className={styles.box}>
        <div>
          <p>Address</p>
          <p>{address}</p>
        </div>
        <div>
          <p>Balance</p>
          <p>{data?.formatted}</p>
        </div>
        <div>
          <p>Minted SBT</p>
          <p></p>
        </div>
      </div>
    </HomeWrapper>
  );
}
