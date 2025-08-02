import { useEffect, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import { useProductStore } from "../services/Store";

const Shop = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      setLoading(false);
    };
    loadData();
  }, [productList]);

  const getFilterProducts = () => {
    let filtered = productList;
    // search by text
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // search by category
    if (selectCategory) {
      filtered = filtered.filter((product) =>
          product.category.toLowerCase().includes(selectCategory.toLowerCase())
      );
    }

    return filtered;
  };
  const filterProducts = getFilterProducts();
  // handle select product by category function
  const handleSelectCategory = (value) => {
    setSelectCategory(value)
  };

  return (
    <div className="fashion-container">
      {console.log(selectCategory)}
      <div className="grid grid-cols-12  gap-5 py-10">
        <ProductSidebar handleCategory={handleSelectCategory} />
        <ArchiveProducts
          loading={loading}
          products={filterProducts}
          setSearchText={setSearchText}
        />
      </div>
    </div>
  );
};

export default Shop;
