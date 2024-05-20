import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeMain from "../Components/Home/HomeMain";
import Error from "../Pages/ErrorPage/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "/doctors",
        element: <HomeMain />,
      },
      {
        path: "/services",
        element: <HomeMain />,
      },
      {
        path: "/blog",
        element: <HomeMain />,
      },
      {
        path: "/login",
        element: <HomeMain />,
      },
      {
        path: "/signup",
        element: <HomeMain />,
      },
      {
        path: "/",
        element: <HomeMain />,
      },
      // {
      //   path: "/",
      //   element: <HomeMain />,
      // },
      // {
      //   path: "/",
      //   element: <HomeMain />,
      // },
      // {
      //   path: "/",
      //   element: <HomeMain />,
      // },
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);
export default Router;
