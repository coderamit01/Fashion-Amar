import { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import FeaturedCategory from "../Components/FeaturedCategory/FeaturedCategory";
import { useCategoryStore } from "../services/Store";


const Home = () => {
  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore((state) => state.fetchCategoryList);
  useEffect(() => {
    fetchCategoryList();
  },[fetchCategoryList]);
  console.log(categoryList)
  return (
    <div>
      <HeroSlider />
      {/* Category section start  */}
      <div className="py-8 md:py-12">
        <div className="fashion-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5">
            {
              categoryList.slice(0,8).map((category) => (
                <FeaturedCategory key={category.slug} category={category} />
              ))
            }
          </div>
        </div>
      </div>
      {/* Category section end  */}
    </div>
    
  );
};

export default Home;