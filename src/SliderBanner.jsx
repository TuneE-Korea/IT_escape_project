"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../app/style.css";
import Image from "next/image";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const SliderBanner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[80vh]"
        slidesPerView={1}
        // spaceBetween={50}
      >
        <SwiperSlide className="h-full">
          <Image
            className="object-cover"
            src={"/images/fourth.jpg"}
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
            src={"/images/first.jpg"}
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
