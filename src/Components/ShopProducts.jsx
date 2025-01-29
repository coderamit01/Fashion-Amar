import ProductCard from "./ProductCard";
import SeacrhInput from "./SeacrhInput";


const ShopProducts = ({products}) => {

  return (
    <div className="p-3 w-9/12">
      <div className="flex flex-col gap-4">
        <SeacrhInput />
        <div className="grid grid-cols-4 gap-4">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;