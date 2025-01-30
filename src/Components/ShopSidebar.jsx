import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";


const ShopSidebar = ({categories}) => {

  return (
    <div className="w-3/12 pt-3">
      <div className="bg-white px-3 pt-3 pb-4">
        <h3 className="text-2xl font-brand text-slate-900 font-[600] pb-3">Category</h3>
        <div className="flex flex-col gap-3">
          {
            categories.map((cat,idx) => (
              <CategoryItem key={idx} category={cat} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

ShopSidebar.propTypes = {
  categories: PropTypes.array.isRequired
}

export default ShopSidebar;