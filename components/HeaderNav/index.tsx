import React from "react";

import Link from "next/link";

import styles from "./index.module.scss";

export default function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNav__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <ul className={styles.headerNav__menu}>
        <li className={styles["headerNav__menu-item"]}>
          <Link href="/test">興趣測驗</Link>
        </li>
        <li className={styles["headerNav__menu-item"]}>
          <Link href="https://blog.eporttw.com/">學習情報</Link>
        </li>
        <li className={styles["headerNav__menu-item"]}>
          <Link href="/login">上架活動</Link>
        </li>
      </ul>
      <Link href="/login">
        <div className={styles.headerNav__login}>
          <button className={styles["headerNav__login-button"]}>登入</button>
        </div>
      </Link>
    </nav>
  );
}
