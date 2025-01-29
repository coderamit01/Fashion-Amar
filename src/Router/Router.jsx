import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Shop from '../Pages/Shop';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Shop />
      }
    ]
  }
])

export default Router;