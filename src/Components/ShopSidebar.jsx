import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";


const ShopSidebar = () => {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setCategories(data.products))
  },[])

  const productCategoris = categories.reduce((acc,category) =>{
    if(!acc.includes(category.category)){
      acc.push(category.category);
    }
    return acc;
  },[])

  return (
    <div className="w-3/12 pt-3">
      <div className="bg-white px-3 pt-3 pb-4">
        <h3 className="text-2xl font-brand text-slate-900 font-[600] pb-3">Category</h3>
        <div className="flex flex-col gap-3">
          {
            productCategoris.map((cat,idx) => (
              <CategoryItem key={idx} category={cat} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;