import { useEffect } from "react";
import useProductStore from "../../services/ProductStore";

const ProductSidebar = ({handleCategory}) => {
  const { categoryList, fetchCategoryList,productList,fetchProductList } = useProductStore();

  useEffect(() => {
    fetchCategoryList(),
    fetchProductList()
  }, [categoryList,productList]);

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Category</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {categoryList.map((category, idx) => (
            <div className="flex items-center" key={idx}>
              <input
                onChange={(e) => handleCategory(e.target.value)}
                type="checkbox"
                name=""
                id={category.slug}
                value={category.name}
                className="me-1.5 accent-brand h-4 w-4"
              />
              <label htmlFor={category.slug}>
                <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                  {category.name}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Brand</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {/* {brands.map((brand, idx) => (
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
          ))}  */}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
