"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { ReactNode } from "react";

interface SwiperCarouselProps {
  children: ReactNode[];
  slidesPerView?: number;
  slidesPerViewMd?: number;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  spaceBetween?: number;
  loop?: boolean;
  speed?: number;
  className?: string;
}

export default function SwiperCarousel({
  children,
  slidesPerView = 1,
  slidesPerViewMd = 1,
  autoplay = true,
  navigation: showNav = false,
  pagination: showDots = false,
  spaceBetween = 0,
  loop = true,
  speed = 800,
  className = "",
}: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: slidesPerViewMd },
        1000: { slidesPerView },
      }}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      navigation={showNav}
      pagination={showDots ? { clickable: true } : false}
      spaceBetween={spaceBetween}
      loop={loop}
      speed={speed}
      className={className}
    >
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
