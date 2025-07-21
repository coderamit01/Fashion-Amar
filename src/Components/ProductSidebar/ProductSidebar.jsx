

const ProductSidebar = () => {
  return (
    <div className="col-span-12 lg:col-span-3">
      <h5 className="text-xl font-semibold text-stone-950">Category</h5>
      <div className="flex flex-col space-y-1.5 pt-2">
        <div className="flex items-center">
          <input type="checkbox" name="" id="11" className="me-1.5 accent-brand h-4 w-4" />
          <label htmlFor="11">
            <span className="text-base capitalize text-slate-800 font-brand font-semibold">delta</span>
            {/* <span className="before:absolute before:h-[18px] before:w-[18px] before:border before:border-slate-400 before:-left-[25px] before:top-[50%] before:-translate-y-[50%]  ms-[25px] relative">sdlkf</span> */}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;