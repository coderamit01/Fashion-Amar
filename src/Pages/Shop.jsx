import ArchiveProducts from "../Components/ArchiveProducts/ArchiveProducts";
import ProductSidebar from "../Components/ProductSidebar/ProductSidebar";

const Shop = () => {
  return (
    <div className="fashion-container">
      <div className="grid grid-cols-12  gap-5 py-10">
        <ProductSidebar />
        <ArchiveProducts />
      </div>
    </div>
  );
};

export default Shop;
