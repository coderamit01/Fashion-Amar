import { useState } from "react";
import ShopProducts from "../Components/ShopProducts";
import ShopSidebar from "../Components/ShopSidebar";
import { useEffect } from "react";

const Shop = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  },[])

  return (
    <div>
      <div className="container lg:max-w-[1530px] mx-auto px-3">
        <div className="flex gap-5">
          <ShopSidebar />
          {console.log(products)}
          <ShopProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;