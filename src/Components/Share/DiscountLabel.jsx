

const DiscountLabel = ({discount}) => {
  return (
    <span className="flex justify-center font-brand font-semibold px-[10px] py-1 bg-maroon text-white rounded-tl-xl rounded-br-xl text-[14px] absolute top-0 left-0 w-[55px]">-{discount}%</span>
  );
};

export default DiscountLabel;