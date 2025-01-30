import PropTypes from "prop-types";

const SeacrhInput = ({searchTitle,onSearch}) => {
  return (
    <>
      <input type="text" className="p-2 border border-[#ececec] outline-none rounded w-full" placeholder="Search Products.." value={searchTitle} onChange={(e) => onSearch(e.target.value)} />
    </>
  );
};
SeacrhInput.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default SeacrhInput;