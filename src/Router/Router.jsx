import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Category from "../Pages/Category";
import SingleProduct from "../Pages/SingleProduct";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-category/:categorySlug",
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
    ]
  }
]);

export default Router;
