import React, { useState } from "react";
import styles from "./index.module.scss";
import logo from "@/images/eport.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const options = [
  { label: "營隊專區", path: "camp" },
  { label: "競賽專區", path: "competition" },
  { label: "課程專區", path: "course" },
  { label: "免費專區", path: "free" },
  { label: "檢定證照", path: "certification" },
  { label: "精選活動", path: "featured" },
];

export default function Header() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const path =
      inputValue === "" ? "/event/search/" : `/event/search/?e=${inputValue}`;
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="https://eporttw.com/">
          <figure className={styles.header__logo}>
            <Image src={logo} alt="E-port 賦能港" priority={true} />
          </figure>
        </Link>
        <div
          className={styles.header__dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          <div
            className={styles["header__dropdown-selected"]}
            onMouseEnter={() => setShowMenu(true)}
          >
            <span className={styles["header__dropdown-selected-text"]}>
              探索
            </span>
            <div className={styles["header__dropdown-selected-icon"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </div>
          <ul
            className={`${styles["header__dropdown-menu"]} ${
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
      </div>
      <div className={styles.header__container}>
        <form className={styles.header__form} onSubmit={handleSubmit}>
          <div className={styles.header__search}>
            <input
              onChange={handleInputChange}
              value={inputValue}
              type="text"
              placeholder="尋找活動..."
            />
          </div>
          <button className={styles["header__search-button"]} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>
        <nav className={styles.header__nav}>
          <div className={styles.header__icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          <ul className={styles.header__menu}>
            <li className={styles["header__menu-item"]}>
              <Link href="/about">興趣測驗</Link>
            </li>
            <li className={styles["header__menu-item"]}>
              <Link href="/services">學習情報</Link>
            </li>
            <li className={styles["header__menu-item"]}>
              <Link href="/products">上架活動</Link>
            </li>
            <li className={styles["header__menu-item"]}>
              <Link href="/contact">
                <button className={styles["header__login-button"]}>登入</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
