"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { AiFillHome } from "react-icons/ai";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { BiLogIn } from "react-icons/bi";
import Loading from "@/src/comp/loading/loading";

export default function LoginComps() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) {
    router.push("/news");
  }

  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.section_img}>
          <img src="./images/world.png" alt="hero_img" />
        </div>
        <div className={styles.social_links}>
          <div className={styles.heading}>
            <div
              className={styles.go_back}
              onClick={() => {
                router.push("/");
              }}
            >
              <AiFillHome />
              <p>Go back to home page</p>
            </div>
            <h1>Sign in with any of these social media providers.</h1>
          </div>
          {isLoading && <Loading />}
          {isConnected ? (
            <div className={styles.links} onClick={() => disconnect()}>
              <p>Logout</p>
              <BiLogIn />
            </div>
          ) : (
            <div className={styles.links} onClick={() => connect()}>
              <p>Login</p>
              <BiLogIn />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
