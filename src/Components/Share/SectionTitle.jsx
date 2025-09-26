import PropTypes from "prop-types";

const SectionTitle = ({text}) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 capitalize">
      {text}
    </h2>
  );
};


SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
}
export default SectionTitle;