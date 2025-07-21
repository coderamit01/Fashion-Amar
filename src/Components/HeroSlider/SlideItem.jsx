
const SlideItem = ({ slide }) => {
  const { image} = slide;
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-[50vh] md:h-[70vh] w-full bg-cover bg-center bg-no-repeat "
    >
    </div>
  );
};

export default SlideItem;
