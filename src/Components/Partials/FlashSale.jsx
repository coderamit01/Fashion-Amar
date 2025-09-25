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
  console.log(productList)
  return (
    <div className="pb-8 md:pb-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="Flash Sell" />
        <ViewAllBtn text="View All" url="/shop" />
      </div>
      <div className="grid grid-cols-5 gap-4 pt-8">
        {
          productList.slice(0,5).map((product) => (
            <FlashProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default FlashSale;