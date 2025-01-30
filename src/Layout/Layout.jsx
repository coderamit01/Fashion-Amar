import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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