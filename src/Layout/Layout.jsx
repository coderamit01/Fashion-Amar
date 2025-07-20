import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
    <Header />
    <div className="grow">
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Layout;