import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({products}) => {
  const row = [];
  products.filter((product) => {
    const ratUpto = product.rating >= 4.5 ? product : false;
    return ratUpto;
  }).slice(0,10).map((product) => (
    row.push(<ProductCard key={product.id} product={product} />)
  ))

  return (
    <>
     {
      row.length > 0 ? (
        row
      ) : <p className="text-slate-900 font-semibold text-2xl text-center">Products are not available</p>
    }
    </>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FeaturedProducts;