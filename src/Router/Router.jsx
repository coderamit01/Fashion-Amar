import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Shop from '../Pages/Shop';
import Home from '../Pages/Home';
import SingleProduct from '../Components/SingleProduct/SingleProduct';
import ShopArchive from '../Components/ShopArchive/ShopArchive';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/products/category/:category',
        element: <ShopArchive />
      }
    ]
  }
])

export default Router;