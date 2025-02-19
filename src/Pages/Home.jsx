import { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import FeaturedCategory from "../Components/FeaturedCategory";
import HotDeals from "../Components/HotDeals";
import FeaturedProducts from "../Components/FeaturedProducts";
import BannerSection from "../Components/BannerSection/BannerSection";
import TopSelling from "../Components/TopSelling/TopSelling";
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts";
import RecentProducts from "../Components/RecentProducts/RecentProducts";
import TopRatedProducts from "../Components/TopRatedProducts/TopRatedProducts";
import Featured from "../Components/Featured/Featured";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const [productRes,categoryRes] = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://dummyjson.com/products/categories')
        ])

        const productData = await productRes.json();
        const categoryData = await categoryRes.json();
        
        setProducts(productData.products);
        setCategories(categoryData);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <HeroSlider />
      {/* Category section start  */}
      <div className="py-8 md:py-12">
        <div className="fashion-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5">
            {
              categories.slice(0,8).map((category) => (
                <FeaturedCategory key={category.slug} category={category} />
              ))
            }
          </div>
        </div>
      </div>
      {/* Category section end  */}
      {/* Hot Deals section start  */}
      <div className="py-5 md:py-10">
        <div className="fashion-container">
            <h2 className="text-4xl font-brand font-bold text-center pb-5 md:pb-12">Today Hot <span className="text-brand">Deals</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <HotDeals products={products} />
            </div>
        </div>
      </div>
      {/* Hot Deals section end  */}
      {/* Banner section start  */}
      <div className="py-5 md:py-10">
        <div className="fashion-container">
            <BannerSection />
        </div>  
      </div>
      {/* Banner section end  */}
      {/* Featured Products section start  */}
      <div className="py-5 md:py-10">
        <div className="fashion-container">
            <h2 className="text-4xl font-brand font-bold text-center pb-5 md:pb-12"> <span className="text-brand">Featured </span>Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <FeaturedProducts products={products} />
            </div>
        </div>
      </div>
      {/* Featured Products section end  */}
      {/* Top Selling, Trending, Top Rated Products section start  */}
      <div className="py-5 md:py-10">
        <div className="fashion-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10">
              <div className="space-y-5">
                <h4 className="font-brand text-2xl text-fblack font-bold capitalize">Top Selling</h4>
                <div>
                  <TopSelling products={products} />
                </div>
              </div>
              <div className="space-y-5">
                <h4 className="font-brand text-2xl text-fblack font-bold capitalize">Trending Products</h4>
                <div>
                  <TrendingProducts products={products} />
                </div>
              </div>
              <div className="space-y-5">
                <h4 className="font-brand text-2xl text-fblack font-bold capitalize">Recently added</h4>
                <div>
                  <RecentProducts products={products} />
                </div>
              </div>
              <div className="space-y-5">
                <h4 className="font-brand text-2xl text-fblack font-bold capitalize">Top Rated</h4>
                <div>
                  <TopRatedProducts products={products} />
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* Top Selling, Trending, Top Rated Products section end  */}
      <div className="py-5 md:py-10">
        <div className="fashion-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <Featured title="Best prices & offers" icon={<MdOutlineLocalOffer />} />
              <Featured title="Free delivery" icon={<TbTruckDelivery />} />
              <Featured title="Great daily deal" icon={<BiCodeAlt />} />
              <Featured title="Easy returns" icon={<TbTruckReturn />} />
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;