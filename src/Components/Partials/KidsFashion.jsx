import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";
import { useProductStore } from "../../services/Store";
import { useEffect } from "react";
import ProductCard from "../Products/ProductCard";

import { Link } from "react-router";
import CategoryProductSlider from "../Share/CategoryProductSlider";
const KidsFashion = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  useEffect(() => {
    const getData = async () => {
      await fetchProductList();
    };
    getData();
  }, []);

  const categoryProducts = productList.filter((product) => {
    return product.category.toLowerCase() === "kids fashion";
  });
  return (
    <div className="pb-8 md:pb-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="kids fashion" />
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

export default KidsFashion;
