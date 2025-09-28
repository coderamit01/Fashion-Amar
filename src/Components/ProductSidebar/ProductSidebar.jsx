import { useEffect, useState } from "react";
import { useCategoryStore, useProductStore } from "../../services/Store";
import { SiHdfcbank } from "react-icons/si";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const ProductSidebar = ({ handleCategory }) => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore.getState().fetchCategoryList;
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

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

  const handleCategoryClick = (categoryId) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
      setOpenSubCategory(null);
    } else {
      setOpenCategory(categoryId);
      setOpenSubCategory(null);
    }
  };
  const handleSubcategoryClick = (subCategoryId) => {
    if (openSubCategory === subCategoryId) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(subCategoryId);
    }
  };

  return (
    <div className="col-span-12 lg:col-span-2">
      <div className="pb-3">
        <h5 className="text-xl font-semibold text-stone-950">Category</h5>
        <div className="flex flex-col space-y-1.5 pt-2">
          {categoryList.map((category) => (
            <div
              className="flex flex-col border-b border-gray-100 last:border-b-0"
              key={category.id}
            >
              <span
                onClick={() => handleCategoryClick(category.id)}
                className="flex justify-between items-center text-slate-900  cursor-pointer p-1 hover:bg-gray-50"
              >
                <span className="text-base text-gray-900 capitalize font-brand font-semibold">
                  {category.title}
                </span>
                {category.subCategories ? (
                  <div>
                    {openCategory === category.id ? (
                      <BiChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <BiChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </span>
              {category?.subCategories ? (
                <div
                  className={`${
                    openCategory === category.id ? "flex" : "hidden"
                  } flex-col ps-2`}
                >
                  {/* sub categories  */}
                  {category.subCategories.map((subcategory, idx) => (
                    <div className="flex flex-col" key={idx}>
                      <span
                        onClick={() => handleSubcategoryClick(idx)}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1"
                      >
                        <span className="text-base text-gray-600 capitalize font-brand">
                          {subcategory.name}
                        </span>
                        {subcategory.children ? (
                          <div>
                            {openSubCategory === idx ? (
                              <BiChevronDown className="w-5 h-5 text-gray-500" />
                            ) : (
                              <BiChevronRight className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                      {/* sub category childrens  */}
                      {subcategory.children ? (
                        <div
                          className={`${
                            openSubCategory === idx ? "flex" : "hidden"
                          } flex-col ps-2`}
                        >
                          {subcategory.children.map((child, idx) => (
                            <span
                              className="text-base capitalize text-slate-600 font-brand cursor-pointer px-2 py-1 hover:bg-gray-50"
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
