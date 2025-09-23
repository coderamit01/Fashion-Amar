import { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import FeaturedCategory from "../Components/FeaturedCategory/FeaturedCategory";
import { useCategoryStore } from "../services/Store";
import { Link } from "react-router";

const Home = () => {
  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore(
    (state) => state.fetchCategoryList
  );
  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);
  return (
    <div>
      <div className="fashion-container pt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <HeroSlider />
          </div>
          <div className="col-span-12 md:col-span-4 flex md:flex-col gap-5">
            <Link to="#" className="inline-block"><img src="../../public/images/image1.png" alt="Banner" className="rounded-xl" /></Link>
            <Link to="#" className="inline-block"><img src="../../public/images/image2.png" alt="Banner" className="rounded-xl" /></Link>
          </div>
        </div>
      </div>

      {/* Category section start  */}
      <div className="py-8 md:py-12">
        <div className="fashion-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5">
            {categoryList.slice(0, 8).map((category) => (
              <FeaturedCategory key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </div>
      {/* Category section end  */}
    </div>
  );
};

export default Home;
