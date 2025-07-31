import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen w-full grid items-center justify-center">
      <div>
        <h2 className="text-center text-5xl font-bold">404 Not Found</h2>
        <div className="text-center pt-10">
          <NavLink to="/" className="py-2 px-5 bg-brand text-white rounded">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
