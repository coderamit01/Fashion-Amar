import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Category from "../Pages/Category";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-u",
        element: <AboutUs />,
      },
      {
        path: "/contact-u",
        element: <ContactUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/category/:categorySlug",
        element: <Category />
      },
      {
        path: "/product/:productSlug",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

export default Router;
