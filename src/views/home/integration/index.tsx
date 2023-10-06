import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomeIntegration() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.partners}>
          <Link href="https://celo.org/">
            <Image
              src="/images/celo.png"
              alt={"celo_logo"}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.partners}>
          <Link href="https://next-auth.js.org/">
            <Image
              src="/images/next_auth.png"
              alt={"celo_logo"}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.partners}>
          <Link href="https://next-auth.js.org/">
            <Image
              src="/images/sol_logo.png"
              alt={"celo_logo"}
              width={100}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
