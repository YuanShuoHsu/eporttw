import React, { useState } from "react";

import styles from "./index.module.scss";

import Link from "next/link";

interface HeaderDropdownMenuProps {
  options: { label: string; path: string }[];
}

export default function HeaderDropdownMenu({ options }: HeaderDropdownMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={styles.headerDropdownMenu}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div
        className={styles["headerDropdownMenu__trigger"]}
        onMouseEnter={() => setShowMenu(true)}
      >
        <span className={styles["headerDropdownMenu__trigger-text"]}>探索</span>
        <div className={styles["headerDropdownMenu__trigger-icon"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
      <ul
        className={`${styles["headerDropdownMenu__list"]} ${
          showMenu ? styles.active : ""
        }`}
      >
        {options.map((option) => (
          <li key={option.path}>
            <Link href={`/event/${option.path}`}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
