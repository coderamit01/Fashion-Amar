import { useEffect } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import FeaturedCategory from "../Components/FeaturedCategory/FeaturedCategory";
import { useCategoryStore } from "../services/Store";
import { Link } from "react-router";
import FlashSale from "../Components/Partials/FlashSale";
import KidsFashion from "../Components/Partials/KidsFashion";
import MensFashion from "../Components/Partials/MensFashion";
import WomenFashion from "../Components/Partials/WomenFashion";

const Home = () => {
  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore(
    (state) => state.fetchCategoryList
  );
  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);
  return (
    <>
      {/* Hero section start  */}
      <div className="fashion-container pt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            {/* Hero Slide   */}
            <HeroSlider />
          </div>
          <div className="col-span-12 md:col-span-4 flex md:flex-col gap-5">
            <Link to="#" className="inline-block">
              <img
                src="/assets/images/image1.png"
                alt="Banner"
                className="rounded-xl"
              />
            </Link>
            <Link to="#" className="inline-block">
              <img
                src="/assets/images/image2.png"
                alt="Banner"
                className="rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Category section start  */}
      <div className="py-8 md:py-12">
        <div className="fashion-container">
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-5">
            {categoryList.slice(0, 8).map((category) => (
              <FeaturedCategory key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </div>
      {/* Flash Sell section start */}
      <div className="fashion-container">
        <FlashSale />
      </div>
      {/* Flash Sell section end */}
      {/* Kids Fashion section start */}
      <div className="fashion-container">
        <KidsFashion />
      </div>
      {/* Kids Fashion section end */}
      {/* Banner section start */}
      <div className="fashion-container">
        <div className="grid grid-cols-2 gap-5">
          <Link to="/shop">
            <img
              className="w-full rounded-xl"
              src="../../public/assets/images/banner.jpeg"
              alt=""
            />
          </Link>
          <Link to="/shop">
            <img
              className="w-full rounded-xl"
              src="../../public/assets/images/banner2.jpeg"
              alt=""
            />
          </Link>
        </div>
      </div>
      {/* Banner section end */}
      {/* Mens Fashion section start */}
      <div className="fashion-container">
        <MensFashion />
      </div>
      {/* Mens Fashion section end */}
      {/* Women's Fashion section start */}
      <div className="fashion-container">
        <WomenFashion />
      </div>
      {/* Women's Fashion section end */}
    </>
  );
};

export default Home;
