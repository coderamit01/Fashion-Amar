import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";

const ViewAllBtn = ({text,url}) => {
  return (
    <Link to={url} className="transition text-base text-slate-900 hover:text-maroon underline flex items-center space-x-1">
      <span>{text} </span>
      <span><BsArrowRight /></span>
    </Link>
  );
};

export default ViewAllBtn;