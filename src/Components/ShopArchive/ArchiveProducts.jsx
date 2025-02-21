import ProductCard from "../ProductCard";

const ArchiveProducts = ({products}) => {
  const row = [];
  products.map((product) => {  
    row.push(<ProductCard key={product.id} product={product} />)
    
  })
  return (
    <div className="py-3 md:pl-3 md:w-9/12">
      <div className="flex flex-col gap-4">
        {/* <SeacrhInput searchTitle={searchTitle} onSearch={onSearch} /> */}
        {
          row.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {row}
            </div>
          ) : (
            <p className="text-xl font-brand font-semibold text-center capitalize">No products found</p>
          )
        }
      </div>
    </div>
  );
};

export default ArchiveProducts;