import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeMain from "../Pages/Home/HomeMain";
import Error from "../Pages/ErrorPage/Error";
import Register from "../Pages/Registration/Signup/Register";
import Login from "../Pages/Registration/Login/LogIn";

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
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
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
