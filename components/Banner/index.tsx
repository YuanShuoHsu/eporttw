import React from "react";
import Image from "next/image";

import { Autoplay, FreeMode, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";

import styles from "./index.module.scss";

const bannerSlides = [
  {
    id: 1,
    imageUrl: "/images/兔You.png",
    alt: "Image 1",
  },
  {
    id: 2,
    imageUrl: "/images/兔You.png",
    alt: "Image 2",
  },
  {
    id: 3,
    imageUrl: "/images/兔You.png",
    alt: "Image 3",
  },
];

export default function Banner() {
  return (
    <Swiper
      className={styles.banner}
      modules={[Autoplay, FreeMode, Keyboard, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      autoHeight={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      grabCursor={true}
      //   keyboard={{ nabled: true }}
      loop={true}
      //   pagination={pagination}
    >
      {bannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.imageUrl}
            alt={slide.alt}
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
