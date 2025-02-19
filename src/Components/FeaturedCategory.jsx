import PropTypes from "prop-types";
import { Link } from "react-router";

const FeaturedCategory = ({category}) => {
  const img = '/public/images/default.png';
  const {name,image} = category;
  return (
    <Link to="#" className="transition flex flex-col gap-3 text-center p-3 bg-[#f8f8f8] hover:shadow-new">
      <img className="h-20 w-20 object-contain mx-auto" src={image ? image : img} alt={name} />
      <h2 className="font-brand text-lg font-semibold leading-5">{name}</h2>
    </Link>
  );
};

FeaturedCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default FeaturedCategory;