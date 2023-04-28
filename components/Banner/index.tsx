import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";

import styles from "./index.module.scss";

import {
  Navigation,
  Pagination,
  FreeMode,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper";

import Image from "next/image";
import Image1 from "../../images/兔You.jpg";
import Image2 from "../../images/校園種子培訓.jpg";
import Image3 from "../../images/面試決勝局.jpg";
import Image4 from "../../images/學習歷程.jpg";
import Image5 from "../../images/探索與思維.jpg";

const slides = [
  {
    id: 1,
    link: "https://special-rabbit.eporttw.com/",
    src: Image1,
    alt: "兔You",
  },
  { id: 2, link: "/event/school_luckerapp", src: Image2, alt: "校園種子培訓" },
  {
    id: 3,
    link: "/event/interview_tips?utm_source=home-star&utm_medium=recommend&utm_campaign=1a9092d419e5453f90419bef56c8af4f",
    src: Image3,
    alt: "面試決勝局",
  },
  {
    id: 4,
    link: "/event/f087611134044ee0866944f9f2df6a26?utm_source=organization&utm_medium=info&utm_campaign=f087611134044ee0866944f9f2df6a26",
    src: Image4,
    alt: "學習歷程",
  },
  {
    id: 5,
    link: "/event/09288f927abe4208834223b9731eb68c?utm_source=organization&utm_medium=info&utm_campaign=09288f927abe4208834223b9731eb68c",
    src: Image5,
    alt: "探索與思維",
  },
];

export default function Banner() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        autoHeight={true}
        modules={[
          Navigation,
          Pagination,
          FreeMode,
          Keyboard,
          Mousewheel,
          Autoplay,
        ]}
        className={styles.banner}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.link}>
              <Image src={item.src} alt={item.alt} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
