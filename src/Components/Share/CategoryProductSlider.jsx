
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../Products/ProductCard";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const CategoryProductSlider = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation]}
      effect="fade"
      loop={false}
      autoplay={false}
      pagination={false}
      navigation={true}
      speed={800}
      slidesPerView={2}
      autoHeight={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={20}
    >
      {products?.map((product) => (
        <SwiperSlide key={product.id} className="!h-full">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CategoryProductSlider.propTypes = {
  products: PropTypes.object.isRequired
}

export default CategoryProductSlider;
