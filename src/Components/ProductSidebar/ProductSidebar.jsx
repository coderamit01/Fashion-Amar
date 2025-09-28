import { useEffect, useState } from "react";
import { useCategoryStore, useProductStore } from "../../services/Store";
import { SiHdfcbank } from "react-icons/si";

const ProductSidebar = ({ handleCategory }) => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore.getState().fetchCategoryList;

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
    };
    loadData();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      await fetchCategoryList();
    };
    loadData();
  }, []);

  return (
    <div className="col-span-12 lg:col-span-2">
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Category</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {categoryList.map((category) => (
            <div className="flex flex-col" key={category.id}>
              <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                {category.title}
              </span>
              {category?.subCategories ? (
                <div className="flex flex-col ps-4">
                  {/* sub categories  */}
                  {category.subCategories.map((subcategory, idx) => (
                    <div className="flex flex-col" key={idx}>
                      <span className="text-base capitalize text-slate-800 font-brand">
                        {subcategory.name}
                      </span>
                      {/* sub category childrens  */}
                      {subcategory.children ? (
                        <div className="flex flex-col ps-4">
                          {subcategory.children.map((child, idx) => (
                            <span
                              className="text-base capitalize text-slate-700 font-brand "
                              key={idx}
                            >
                              {child}
                            </span>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Brand</h5>
        <div className="flex flex-col space-y-1.5 pt-2"></div>
      </div>
    </div>
  );
};

export default ProductSidebar;
