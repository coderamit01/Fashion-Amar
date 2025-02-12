import PropTypes from "prop-types";
import { Link } from "react-router";

const FeaturedCategory = ({category}) => {
  const {name} = category;
  return (
    <Link to="#" className="transition p-3 py-5 text-center bg-[#eae9e9] hover:shadow-new">
      <h2 className="font-brand font-semibold">{name}</h2>
    </Link>
  );
};

FeaturedCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default FeaturedCategory;