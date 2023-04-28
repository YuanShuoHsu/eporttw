import React from "react";
import Image from "next/image";
import Link from "next/link";

import eport from "../../images/footer/eport_white.png";
import facebook from "../../images/footer/footer-fb.png";
import instagram from "../../images/footer/footer-ig.png";
import youtube from "../../images/footer/footer-yt.png";
import lucker from "../../images/footer/footer-lucker.png";

import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href={"https://eporttw.com/"}>
        <div className={styles.footer__logo}>
          <Image src={eport} alt="e-port 賦能港" />
        </div>
      </Link>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>興趣測驗</li>
        <li className={styles.footer__listItem}>學習情報</li>
        <li className={styles.footer__listItem}>上架活動</li>
        <li className={styles.footer__listItem}>搜尋活動</li>
      </ul>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>聯絡我們</li>
        <li className={styles.footer__listItem}>常見問題</li>
        <li className={styles.footer__listItem}>隱私權政策</li>
        <li className={styles.footer__listItem}>個資保護聲明</li>
      </ul>
      <ul className={styles.footer__mobile}>
        <li className={styles.footer__social}>
          <Link href={"https://www.facebook.com/luckertw"}>
            <div className={styles.footer__socialIcon}>
              <Image src={facebook} alt="facebook" />
            </div>
          </Link>
          <Link href={"https://www.instagram.com/eport_lucker/"}>
            <div className={styles.footer__socialIcon}>
              <Image src={instagram} alt="instagram" />
            </div>
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UC-YOu1WQQppd8GkvPefGQGA"}
          >
            <div className={styles.footer__socialIcon}>
              <Image src={youtube} alt="youtube" />
            </div>
          </Link>
        </li>
        <li className={styles.footer__contact}>
          E-mail : eport_info@eporttw.com
        </li>
        <li className={styles.footer__link}>
          <span className={styles.footer__linkText}>友善連結</span>
          <Link href={"https://luckertw.com/"}>
            <div className={styles.footer__linkIcon}>
              <Image src={lucker} alt="lucker" />
            </div>
          </Link>
        </li>
        <li className={styles.footer__copyright}>
          © 2023 E-port. All Rights Reserved.
        </li>
        <li className={styles.footer__analytics}>
          <Link href={"mailto:eport_info@eporttw.com"}>
            <span className={styles.footer__analyticsText}>聯絡我們</span>
          </Link>
          <hr />
          <Link href={"https://blog.eporttw.com/?page_id=4849"}>
            <span className={styles.footer__analyticsText}>常見問題</span>
          </Link>
          <hr />
          <Link href={"/privacy"}>
            <span className={styles.footer__analyticsText}>隱私權政策</span>
          </Link>
          <hr />
          <Link href={"/info/protect"}>
            <span className={styles.footer__analyticsText}>個資保護聲明</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
