import { useEffect, useState } from "react";
import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";
import { useProductStore } from "../services/Store";

const Shop = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      setLoading(false);
    };
    loadData();
  }, []);

  

  return (
    <div>
        <div className="text-center text-2xl font-semibold capitalize bg-[#F8F8F8] py-4 px-2">
          Shop
        </div>
      <div className="fashion-container">
        <div className="grid grid-cols-12  gap-5 py-10">
          <ProductSidebar />
           <ArchiveProducts
            loading={loading}
            products={productList}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
