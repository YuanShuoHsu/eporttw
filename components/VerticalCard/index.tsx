import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

import image from "../../images/兔You.jpg";

export default function VerticalCard() {
  return (
    <div className={styles.verticalCard}>
      <div className={styles.verticalCard__header}>
        <div className={styles.verticalCard__headerImage}>
          <Image src={image} alt="測試" />
        </div>
        <div className={styles.verticalCard__headerInfo}>
          <div className={styles.verticalCard__headerDeadline}>
            12/31 報名截止
          </div>
          <div className={styles.verticalCard__headerType}>講座</div>
        </div>
      </div>
      <div className={styles.verticalCard__main}>
        <div className={styles.verticalCard__mainTitle}>
          <h4>面試決勝局（一）：面試技巧教學試技巧教學試技巧教</h4>
        </div>
        <div className={styles.verticalCard__mainInfo}>
          <div className={styles.verticalCard__mainIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
          </div>
          <span className={styles.verticalCard__mainText}>2023-04-28（三）</span>
        </div>
        <div className={styles.verticalCard__mainInfo}>
          <div className={styles.verticalCard__mainIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <span className={styles.verticalCard__mainText}>全國各高中職</span>
        </div>
        <div className={styles.verticalCard__mainInfo}>
          <div className={styles.verticalCard__mainIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
          <span className={styles.verticalCard__mainText}>免費</span>
        </div>
      </div>
      <hr />
      <div className={styles.verticalCard__footer}>
        <p className={styles.verticalCard__footerHashTag}>#面試技巧 #面試技巧 #面試技巧 #面試技巧 #面試技巧 #面試技巧</p>
      </div>
    </div>
  );
}
