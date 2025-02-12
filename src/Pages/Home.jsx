import { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import FeaturedCategory from "../Components/FeaturedCategory";
import HotDeals from "../Components/HotDeals";


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
      <div className="py-12">
        <div className="fashion-container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {
              categories.map((category) => (
                <FeaturedCategory key={category.slug} category={category} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="fashion-container">
            <h2 className="text-4xl font-brand font-bold text-center pb-10">Today Hot <span className="text-brand">Deals</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <HotDeals products={products} />
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;