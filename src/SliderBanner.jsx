"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const SliderBanner = () => {
  return (
    <section>
      <Swiper className="h-[80vh]" slidesPerView={1} spaceBetween={50}>
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/first.jpg"}
            alt={""}
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/second.jpg"}
            alt={""}
            fill
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/third.jpg"}
            fill
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/fourth.jpg"}
            fill
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/fifth.jpg"}
            fill
            alt={""}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderBanner;
