import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../../images/eport.png";

import styles from "./index.module.scss";

export default function HeaderLogo() {
  return (
    <Link href="https://eporttw.com/">
      <figure className={styles.headerLogo}>
        <Image src={logo} alt="E-port 賦能港" priority={true} />
      </figure>
    </Link>
  );
}
