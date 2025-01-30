import PropTypes from "prop-types";


const CategoryItem = ({category}) => {
  return (
    <label className="transition has-checked:border-[#BCE3C9] has-checked:shadow-new group flex items-center justify-between text-slate-900 border border-[#ececec] rounded hover:shadow-new hover:border-[#BCE3C9] p-2 cursor-pointer">

      <span className="text-base font-brand text-gray-800 font-[500] capitalize group-hover:text-[#3BB77E] group-has-checked:text-[#3BB77E]">{category}</span>
      <span className="h-[28px] w-[28px] p-1 rounded-full bg-[#3BB77E] text-white flex items-center justify-center font-brand text-[12px]">5</span>
      <input type="checkbox" className="hidden" />
    </label>
  );
};
CategoryItem.propTypes = {
  category: PropTypes.string.isRequired
}
export default CategoryItem;