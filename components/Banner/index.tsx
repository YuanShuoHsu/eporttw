import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";

import styles from "./index.module.scss";

import { Navigation, Pagination, FreeMode,Autoplay } from "swiper";

import Image from "next/image";
import Image1 from "../../images/兔You.jpg";
import Image2 from "../../images/校園種子培訓.jpg";
import Image3 from "../../images/面試決勝局.jpg";
import Image4 from "../../images/學習歷程.jpg";
import Image5 from "../../images/探索與思維.jpg";

const slides = [
  { id: 1, src: Image1, alt: "兔You" },
  { id: 2, src: Image2, alt: "校園種子培訓" },
  { id: 3, src: Image3, alt: "面試決勝局" },
  { id: 4, src: Image4, alt: "學習歷程" },
  { id: 5, src: Image5, alt: "探索與思維" },
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
        mousewheel={true}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        autoHeight={true}
        modules={[Navigation, Pagination, FreeMode,Autoplay]}
        className={styles.banner}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
