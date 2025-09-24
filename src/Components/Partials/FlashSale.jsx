import { useEffect } from "react";
import { useProductStore } from "../../services/Store";
import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";
import FlashProductCard from "../Products/FlashProductCard";

const FlashSale = () => {
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  useEffect(() => {
    const getData = async () => {
      await fetchProductList();
    }
    getData();
  },[productList])

  return (
    <div className="pt-5 pb-10">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="Flash Sell" />
        <ViewAllBtn text="View All" url="#" />
      </div>
      <div className="grid grid-cols-5 gap-4 pt-4">
        {
          productList.map((product) => (
            <FlashProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default FlashSale;