import PropTypes from "prop-types";
import { Link } from "react-router";

const BrandCard = ({ brand }) => {
  const { name, slug, logo } = brand;
  return (
    <Link className="transition bg-[#f8f8f8] px-3 py-5 rounded-xl flex flex-col items-center justify-center transform hover:-translate-y-2" to={slug}>
      <img src={logo} alt={name} className="w-[120px] h-[40px]" />
    </Link>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
export default BrandCard;
