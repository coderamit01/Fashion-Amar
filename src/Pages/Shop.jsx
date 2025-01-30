import { useState } from "react";
import ShopProducts from "../Components/ShopProducts";
import ShopSidebar from "../Components/ShopSidebar";
import { useEffect } from "react";

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [searchTitle,setSearchTitle] = useState('');
  const [selectedCategory,setSeletedCategory] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  },[])

  // Get unique Categories 
  const productCategories = products.reduce((acc,category) =>{
    if(!acc.includes(category.category)){
      acc.push(category.category);
    }
    return acc;
  },[])

  const handleCategorySelect  = (category) => {
    setSeletedCategory((prev) => 
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev,category]
    )
  }


  // Filter Products
  const filterProducts = products.filter((product) => {
    const matchesCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category);
    return matchesCategory;
  })

  return (
    <div>
      <div className="container lg:max-w-[1530px] mx-auto px-3">
        <div className="flex gap-5">
          <ShopSidebar 
          categories={productCategories}
          selectedCategory={selectedCategory}
          onSelectedCategory={handleCategorySelect }
           />
          <ShopProducts products={filterProducts} searchTitle={searchTitle} onSearch={setSearchTitle} />
        </div>
      </div>
    </div>
  );
};

export default Shop;