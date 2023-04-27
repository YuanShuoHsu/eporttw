import React from "react";

import VerticalCard from "../VerticalCard";

import Link from "next/link";

import styles from "./index.module.scss";

interface EventContainerProps {
  title: string;
  link?: string;
  linkText?: string;
}

export default function EventContainer({
  title,
  link,
  linkText,
}: EventContainerProps) {
  return (
    <div className={styles.eventContainer}>
      <h2 className={styles.eventContainer__title}>{title}</h2>
      <div className={styles.eventContainer__box}>
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard lastCard={styles.eventContainer__lastCard}/>
      </div>
      {link && (
        <div className={styles.eventContainer__link}>
          <Link href={link}>{linkText}</Link>
        </div>
      )}
    </div>
  );
}
