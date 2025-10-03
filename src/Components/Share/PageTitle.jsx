import { useLocation } from "react-router";

const PageTitle = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(1);
  return (
    <div className="text-center text-2xl font-semibold capitalize bg-[#F8F8F8] py-4 px-2">
      {title}
    </div>
  );
};

export default PageTitle;