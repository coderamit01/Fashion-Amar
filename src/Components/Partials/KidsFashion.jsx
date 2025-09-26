import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";
import { useProductStore } from "../../services/Store";
import { useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";
const KidsFashion = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  useEffect(() => {
    const getData = async () => {
      await fetchProductList();
    };
    getData();
  }, [productList]);

  const categoryProducts = productList.filter((product) => {
    return product.category.toLowerCase() === "kids fashion";
  });

  console.log(productList);
  return (
    <div className="pb-8 md:pb-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="kids fashion" />
        <ViewAllBtn text="View All" url="/shop" />
      </div>
      <div className="grid grid-cols-5 gap-5  pt-8">
        <div className="hidden lg:block">
          <Link to="/shop">
            <img src="../../public/assets/images/2.jpg" alt="Image" />
          </Link>
        </div>
        <div className="col-span-5 lg:col-span-4">
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
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={20}
          >
            {categoryProducts.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KidsFashion;
