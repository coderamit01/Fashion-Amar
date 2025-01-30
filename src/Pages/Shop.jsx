import { useState } from "react";
import ShopProducts from "../Components/ShopProducts";
import ShopSidebar from "../Components/ShopSidebar";
import { useEffect } from "react";

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [searchTitle,setSearchTitle] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  },[])

  return (
    <div className="bg-[#F8F8F8]">
      <div className="container lg:max-w-[1530px] mx-auto px-3">
        <div className="flex gap-5">
          <ShopSidebar />
          <ShopProducts products={products} searchTitle={searchTitle} onSearch={setSearchTitle} />
        </div>
      </div>
    </div>
  );
};

export default Shop;