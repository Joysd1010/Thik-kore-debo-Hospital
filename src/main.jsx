import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Route/Router";
import AuthProvider from "./Components/AuthProvider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
);
