import { NavLink } from "react-router";
import NotFoundImg from "../../public/assets/images/404.png";

const NotFound = () => {
  return (
    <div className="w-full grid items-center justify-center">
      <div className="py-8">
        <img src={NotFoundImg} alt="404 Image" />
        <div className="text-center space-y-3">
        <p className="text-base font-brand">Sorry, the page you visited does not exist.</p>
          <NavLink to="/" className="py-2 px-5 bg-brand text-white rounded">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
