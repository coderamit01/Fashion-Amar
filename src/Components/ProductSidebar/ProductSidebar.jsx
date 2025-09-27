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
            <div key={category.id}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id={category.slug}
                  className="me-1.5 accent-brand h-4 w-4"
                />
                <label htmlFor={category.slug}>
                  <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                    {category.title}
                  </span>
                </label>
              </div>
              {category?.subCategories ? (
                <div>
                  <div className="flex flex-col ps-3">
                    {category.subCategories.map((subcat, idx) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          type="checkbox"
                          name=""
                          id={idx}
                          className="me-1.5 accent-brand h-4 w-4"
                        />
                        <label htmlFor={idx}>
                          <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                            {subcat.name}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col ps-3">
                    {category.subCategories.children.map((children, idx) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          type="checkbox"
                          name=""
                          id={idx}
                          className="me-1.5 accent-brand h-4 w-4"
                        />
                        <label htmlFor={idx}>
                          <span className="text-base capitalize text-slate-800 font-brand font-semibold">
                            {children}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
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
