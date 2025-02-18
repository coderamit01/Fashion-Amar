import PrimaryBtn from "../Share/PrimaryBtn";


const SlideItem = ({slide}) => {
  const {image,title,shortdesc,buttonText,buttonUrl} = slide;
  return (
    <div style={{backgroundImage: `url(${image})` }} className="h-[50vh] md:h-[70vh] w-full bg-cover bg-center bg-no-repeat ">
      <div className="fashion-container flex items-center justify-center md:justify-start h-full">
      <div className="text-center md:text-start">
        <h2 className="text-3xl md:text-6xl font-brand font-bold text-white mb-1">{title}</h2>
        <p className="text-slate-100 mb-4 font-brand">{shortdesc}</p>
        <PrimaryBtn text={buttonText} url={buttonUrl} />
      </div>
      </div>
    </div>
  );
};

export default SlideItem;