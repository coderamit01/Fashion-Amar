import { useEffect } from "react";
import { useProductStore } from "../../services/Store";
import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";
import FlashProductCard from "../Products/FlashProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";

const FlashSale = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  useEffect(() => {
    const getData = async () => {
      await fetchProductList();
    };
    getData();
  }, []);
  const discountProducts = productList
    .filter((product) => {
      if (product?.discountPercentage) {
        return product;
      }
    }).slice(0, 10);
  return (
    <div className="pb-8 md:pb-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="Flash Sell" />
        <ViewAllBtn text="View All" url="/shop" />
      </div>
      <div className="pt-8">
        <Swiper
          modules={[Navigation]}
          effect="fade"
          loop={false}
          autoplay={false}
          pagination={false}
          navigation={true}
          speed={800}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={20}
        >
          {discountProducts.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <FlashProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSale;
