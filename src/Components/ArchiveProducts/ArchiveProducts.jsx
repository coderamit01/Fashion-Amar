import ProductCard from "../Products/ProductCard";
import Loader from "../Loader/Loader";

const ArchiveProducts = ({loading,products}) => {

  if (loading) return (
    <div className="col-span-12 lg:col-span-9">{<Loader />}</div>
  );
  return (
    <div className="col-span-12 lg:col-span-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ArchiveProducts;
