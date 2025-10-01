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
import CategoryProductSlider from "../Share/CategoryProductSlider";


const MensFashion = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  useEffect(() => {
    const getData = async () => {
      await fetchProductList();
    };
    getData();
  }, []);

  const categoryProducts = productList.filter((product) => {
    return product.category.toLowerCase() === "men's fashion";
  });
  return (
    <div className="py-8 md:py-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="Men's Fashion" />
        <ViewAllBtn text="View All" url="/shop" />
      </div>
      <div className="grid grid-cols-5 gap-5  pt-8">
        <div className="hidden lg:block">
          <Link to="/shop">
            <img src="/assets/images/2.jpg" alt="Image" />
          </Link>
        </div>
        <div className="col-span-5 lg:col-span-4">
          <CategoryProductSlider products={categoryProducts} />
        </div>
      </div>
    </div>
  );
};

export default MensFashion;