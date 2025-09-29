import PropTypes from "prop-types";
import { Link } from "react-router";

const FeaturedCategory = ({ category }) => {
  
  const img = '/public/images/default.png';
  const {slug,title,image} = category;
  return (
    <Link to={`/product-category/${slug}`} className="transition flex flex-col gap-3 text-center p-3 bg-[#f8f8f8] hover:shadow-new rounded-xl">
      <img className="h-20 w-20 object-contain mx-auto" src={image ? image : img} alt={title} />
      <h2 className="font-brand text-base font-semibold leading-5">{title}</h2>
    </Link>
  );
};

FeaturedCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default FeaturedCategory;