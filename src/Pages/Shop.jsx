import { useEffect, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import useProductStore from "../services/ProductStore";

const Shop = () => {
  const { productList, fetchProductList} =
    useProductStore();
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectCategory, setSelectCategory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      setLoading(false);
    };
    loadData();
  }, []);

  const getFilterProducts = () => {
    let filtered = productList;
    // search by text
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // search by category
    if (selectCategory && selectCategory.length > 0) {
      filtered = filtered.filter((product) =>
        selectCategory.some((cat) =>
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }


    return filtered;
  };
  const filterProducts = getFilterProducts();
  // handle select product by category function
  const handleSelectCategory = (value) => {
    setSelectCategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((cat) => cat !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div className="fashion-container">
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
