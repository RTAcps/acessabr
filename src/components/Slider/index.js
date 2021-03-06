import React from "react";
import Card from "../Card";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//import "./styles.scss";
import "swiper/swiper-bundle.css";

SwiperCore.use(Pagination);

function Slider() {
  return (
    <Swiper slidesPerView={5}>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
