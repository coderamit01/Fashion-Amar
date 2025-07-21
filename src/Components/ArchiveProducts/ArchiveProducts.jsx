import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import Loader from "../Loader/Loader";

const ArchiveProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  if (loading) return (
    <div className="col-span-12 lg:col-span-9">{<Loader />}</div>
  );
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ArchiveProducts;
