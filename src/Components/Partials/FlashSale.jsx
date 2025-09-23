import SectionTitle from "../Share/SectionTitle";
import ViewAllBtn from "../Share/ViewAllBtn";

const FlashSale = () => {
  return (
    <div className="pt-5 pb-10">
      <div className="flex items-center justify-between gap-3">
        <SectionTitle text="Flash Sell" />
        <ViewAllBtn text="View All" url="#" />
      </div>
    </div>
  );
};

export default FlashSale;