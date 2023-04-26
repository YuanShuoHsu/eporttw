import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderDropdownMenu from "../HeaderDropdownMenu";
import HeaderSearchForm from "../HeaderSearchForm";
import HeaderNav from "../HeaderNav";

import styles from "./index.module.scss";

const options = [
  { label: "營隊專區", path: "camp" },
  { label: "競賽專區", path: "competition" },
  { label: "課程專區", path: "course" },
  { label: "免費專區", path: "free" },
  { label: "檢定證照", path: "certification" },
  { label: "精選活動", path: "featured" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderLogo />
        <HeaderDropdownMenu options={options} />
      </div>
      <div className={styles.header__container}>
        <HeaderSearchForm />
        <HeaderNav />
      </div>
    </header>
  );
}
