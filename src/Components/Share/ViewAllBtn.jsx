import { Link } from "react-router";

const ViewAllBtn = ({text,url}) => {
  return (
    <Link to={url} className="text-base underline">
      {text}
    </Link>
  );
};

export default ViewAllBtn;