import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Shop from '../Pages/Shop';
import Home from '../Pages/Home';
import SingleProduct from '../Components/SingleProduct/SingleProduct';
import NotFound from '../Pages/NotFound';

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
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default Router;