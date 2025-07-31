import ProductCard from "../Products/ProductCard";
import Loader from "../Loader/Loader";

const ArchiveProducts = ({loading,products,setSearchText}) => {

  if (loading) return (
    <div className="col-span-12 lg:col-span-9">{<Loader />}</div>
  );
  return (
    <div className="col-span-12 lg:col-span-9">
      <input type="text" name="" id="" onChange={(e) => setSearchText(e.target.value)} className="border border-slate-300 outline-0 px-2 py-1 rounded-[3px] w-full" placeholder="Search..." />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 pt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ArchiveProducts;
