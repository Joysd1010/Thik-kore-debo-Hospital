import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeMain from "../Components/Home/HomeMain";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
    ],
  },
]);
export default Router;
