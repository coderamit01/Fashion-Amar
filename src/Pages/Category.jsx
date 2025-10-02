import { useEffect, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import { useCategoryStore, useProductStore } from "../services/Store";
import { useParams } from "react-router";

const Category = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchCategoryList = useCategoryStore.getState().fetchCategoryList;
  const [loading, setLoading] = useState(true);

  const { categorySlug } = useParams();

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      setLoading(false);
    };
    loadData();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      await fetchCategoryList();
      setLoading(false);
    };
    loadData();
  }, [categorySlug]);

  const getCategory = categoryList.filter(
    (category) => category.slug === categorySlug
  );
  const { title } = getCategory[0] || {};

  const productByCategory = productList.filter(
    (product) => product.category.toLowerCase() === title.toLowerCase()
  );

  return (
    <div>
      <div className="text-center text-2xl font-semibold capitalize bg-[#F8F8F8] py-4 px-2">
        {title}
      </div>
      <div className="fashion-container">
        <div className="grid grid-cols-12  gap-5 py-10">
          <ProductSidebar />
          <ArchiveProducts loading={loading} products={productByCategory} />
        </div>
      </div>
    </div>
  );
};

export default Category;
