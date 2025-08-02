import { useEffect, useState } from "react";
import { useProductStore } from "../../services/Store";

const ProductSidebar = ({ handleCategory }) => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(productList.map((product) => product?.category)),
    ];
    setCategories(uniqueCategories);
  }, [productList]);

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(
        productList.map((product) => product?.brand).filter((brand) => brand)
      ),
    ];
    setBrands(uniqueBrands);
  }, [productList]);

  return (
    <div className="col-span-12 lg:col-span-2">
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Category</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          <select
            onChange={(e) => handleCategory(e.target.value)}
            name="cars"
            id="cars"
            className="border border-slate-300 rounded outline-none p-1 text-base capitalize text-slate-800 font-brand font-semibold"
          >
            <option className="text-base capitalize text-slate-800 font-brand font-semibold">
              Select Category
            </option>
            {categories.map((category, idx) => (
              <option
                key={idx}
                value={category}
                className="text-base capitalize text-slate-800 font-brand font-semibold"
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Brand</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {brands.map((brand, idx) => (
            <div className="flex items-center" key={idx}>
              <input
                type="checkbox"
                name=""
                id={brand}
                className="me-1.5 accent-brand h-4 w-4"
              />
              <label htmlFor={brand}>
                <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                  {brand}
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
