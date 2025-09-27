import { useEffect } from "react";
import { useBrandsStore } from "../../services/Store";
import BrandCard from "../Share/BrandCard";
import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BrandSection = () => {
  const brandList = useBrandsStore((state) => state.brandList);
  const fetchBrands = useBrandsStore.getState().fetchBrands;
  useEffect(() => {
    const loadData = async () => {
      await fetchBrands();
    };
    loadData();
  }, []);
  return (
    <div className="pb-6 md:pb-10">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="shop by brands" />
        <ViewAllBtn text="View All" url="/shop" />
      </div>
      <div className="pt-7">
        <Swiper
          modules={[Navigation]}
          effect="fade"
          loop={false}
          autoplay={true}
          pagination={false}
          navigation={true}
          speed={800}
          slidesPerView={2}
          className="!py-4"
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
          spaceBetween={20}
        >
          {brandList.map((brand) => (
            <SwiperSlide key={brand.id}>
              <BrandCard brand={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSection;
