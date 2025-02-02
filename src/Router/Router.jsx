import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Shop from '../Pages/Shop';
import Home from '../Pages/Home';

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
      }
    ]
  }
])

export default Router;