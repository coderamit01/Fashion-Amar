import { useEffect, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import axios from "axios";

const Shop = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = await response.data;
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getFilterProducts = () => {
    let filtered = products;
    if (searchText) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filtered;
  }
  const filterProducts = getFilterProducts();

  return (
    <div className="fashion-container">
      <div className="grid grid-cols-12  gap-5 py-10">
        <ProductSidebar />
        <ArchiveProducts loading={loading} products={filterProducts} setSearchText={setSearchText} />
      </div>
    </div>
  );
};

export default Shop;
