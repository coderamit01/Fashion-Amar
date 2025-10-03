import { useEffect, useMemo, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import { useCategoryStore, useProductStore } from "../services/Store";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

const Category = () => {
  const { categorySlug } = useParams();
  const [loading, setLoading] = useState(true);
  
  const productList = useProductStore((state) => state.productList);
  const categoryList = useCategoryStore((state) => state.categoryList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  const fetchCategoryList = useCategoryStore.getState().fetchCategoryList;

  // Fetch products & categories
  useEffect(() => {
    const loadData = async() => {
      await fetchProductList();
      await fetchCategoryList();
      setLoading(false);
    }
    loadData();
  }, []);
  
  // Get category 
  const getCategory = useMemo(() => {
    return categoryList.find((category) => category?.slug === categorySlug) || {};
  }, [categoryList, categorySlug]);

  // Get category name
  const { title } = getCategory;

  // Filter products by category 
  const productByCategory = useMemo(() => {
    if (!title) return [];
    return productList.filter(
    (product) => product?.category?.toLowerCase() === title.toLowerCase());
  }, [productList,title]);

  const mainTitle = document.title;

  return (
    <div>
      <Helmet>
        <title>{title && title} - {mainTitle}</title>
      </Helmet>
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
