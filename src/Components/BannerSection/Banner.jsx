import SmallBtn from "../Share/SmallBtn";


const Banner = ({banner}) => {
  const {title,image,btn_text,btn_url} = banner;
  return (
    <div className="relative">
      <img src={image} alt={title} />
      <div className="absolute left-10 top-[50%] translate-y-[-50%] right-[30%]">
        <h3 className="font-brand text-fblack font-semibold text-xl mb-5">{title}</h3>
        <SmallBtn text={btn_text} url={btn_url} />
      </div>
    </div>
  )
}

export default Banner;