import PropTypes from "prop-types";

const Featured = ({icon,title}) => {
  return (
    <div className="bg-[#F4F6FA] py-5 px-3 rounded flex items-center gap-3">
      <span className="text-4xl">{icon}</span>
      <h6 className="font-brand text-xl">{title}</h6>
    </div>
  );
};
Featured.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}
export default Featured;