import PropTypes from "prop-types";

const ShopArchiveSidebar = ({ categories }) => {
  return (
    <div className="md:w-3/12 pt-3 pb-3">
      <div className="bg-white px-3 pt-3 pb-4">
        <h3 className="text-2xl font-brand text-slate-900 font-[600] pb-3">Category</h3>
        <div className="flex flex-col gap-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className="hidden peer"
                  id={cat.slug}
                  value={cat.name}
                />
                <label
                  className="transition text-slate-900 cursor-pointer relative my-before mr-3"
                  htmlFor={cat.name}
                >
                  <span className="text-base font-brand text-gray-800 font-[500] capitalize peer-hover:text-[#3BB77E] peer-checked:text-[#3BB77E] ml-6">
                    {cat.name}
                  </span>
                </label>
              </div>
              <span className="h-[28px] w-[28px] p-1 rounded-full bg-[#3BB77E] text-white flex items-center justify-center font-brand text-[12px]">
                5
              </span>
            </div>

          ))}
        </div>
        <h3 className="text-2xl font-brand text-slate-900 font-[600] pt-3 pb-3">Brands</h3>
      </div>
    </div>
  );
};

ShopArchiveSidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ShopArchiveSidebar;