import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="pb-8 md:pb-12">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5">
          <Link to="/shop">
            <img
              className="rounded-xl"
              src="/assets/images/banner_left.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="pb-4">
            <Link to="/shop">
              <img
                className="rounded-xl"
                src="/assets/images/banner_middle_top.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-5">
            <Link to="/shop">
              <img
                className="rounded-xl"
                src="/assets/images/banner_middle_left.jpg"
                alt=""
              />
            </Link>
            <Link to="/shop">
              <img
                className="rounded-xl"
                src="/assets/images/banner_middle_right.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:col-span-3">
          <Link to="/shop">
            <img
              className="rounded-xl"
              src="/assets/images/banner_right.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
