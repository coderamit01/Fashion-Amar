import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
import axios from "axios";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../../public/data/banner.json");
        const slideData = await response.data;
        setSlides(slideData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="hero-slider"
        speed={800}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
