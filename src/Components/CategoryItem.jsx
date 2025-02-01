import PropTypes from "prop-types";


const CategoryItem = ({ category, onSelect, isSelected,showCount }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <input type="checkbox"
          className="hidden peer"
          id={category}
          checked={isSelected}
          value={category}
          onChange={() => onSelect(category)}
        />
        <label className="transition text-slate-900 cursor-pointer relative my-before mr-3" htmlFor={category} >
          <span className="text-base font-brand text-gray-800 font-[500] capitalize peer-hover:text-[#3BB77E] peer-checked:text-[#3BB77E] ml-6">
            {category}
          </span>
        </label>

      </div>
      {showCount && 
        <span className="h-[28px] w-[28px] p-1 rounded-full bg-[#3BB77E] text-white flex items-center justify-center font-brand text-[12px]">5</span>
      }
    </div>
  );
};
CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}
export default CategoryItem;