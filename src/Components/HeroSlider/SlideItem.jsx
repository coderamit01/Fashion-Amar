import { Link } from "react-router";

const SlideItem = ({ slide }) => {
  const { image,title} = slide;
  return (
    <Link to="#">
      <img src={image} alt={title} className="rounded-xl" />
    </Link>
  );
};

export default SlideItem;
