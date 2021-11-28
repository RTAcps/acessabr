import React, { useContext, useEffect, useState } from "react";
import Card from "../Card";
import { FilterContext } from "../../contexts/FilterContext";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Api from "../../config/api";

SwiperCore.use(Pagination);

function Slider() {
  const { filteredPlaces, setFilteredPlaces } = useContext(FilterContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await Api.get(`/places?category=${filteredPlaces}`);

      if (result.status === 200) {
        setPlaces(result.data);
      }
    };
    fetchPlaces();
  }, [filteredPlaces]);
  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1023: {
          slidesPerView: 5,
        },
      }}
    >
      {places.map((item) => (
        <SwiperSlide key={item}>
          <Card key={item.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
