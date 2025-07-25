import axios from "axios";
import { useEffect, useState } from "react";

const ProductSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.data;
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Category</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {categories.map((category, idx) => (
            <div className="flex items-center" key={idx}>
              <input
                type="checkbox"
                name=""
                id={category}
                className="me-1.5 accent-brand h-4 w-4"
              />
              <label htmlFor={category}>
                <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                  {category}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Brand</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {categories.map((category, idx) => (
            <div className="flex items-center" key={idx}>
              <input
                type="checkbox"
                name=""
                id={category}
                className="me-1.5 accent-brand h-4 w-4"
              />
              <label htmlFor={category}>
                <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                  {category}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
