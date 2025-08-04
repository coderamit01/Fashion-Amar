import { Link } from "react-router";

const PrimaryBtn = ({text,url}) => {
  return (
    <Link to={url} className="px-5 py-2 bg-brand text-white rounded cursor-pointer inline-block text-center">
      {text}
    </Link>
  );
};

export default PrimaryBtn;