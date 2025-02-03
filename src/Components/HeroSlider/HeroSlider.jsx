import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/bundle'

const HeroSlider = () => {
  const [slides,setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('../../../public/sliderData/sliderData.json');
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.log(error.message)
      }

    }
    fetchData();
  },[])

  return (
    <div>
      <Swiper
      modules={[Navigation,Pagination]}
      navigation={true}
      pagination={{clickable: true}}
      className="hero-slider"
      >
        {slides.map((slide) => 
          <SwiperSlide key={slide.id}>
            <SlideItem slide={slide} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default HeroSlider;