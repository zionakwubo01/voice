import { createBrowserRouter } from "react-router-dom";
import Layout from "../Lay/Layout";
import Homescreen from "../Lay/Homescreen";
import CreateQuestion from "../components/auth/CreateQuestion";
import Voice from "../components/Voice";

export const mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
  {
    path: "/quest",
    element: <CreateQuestion />,
  },
  {
    path: "/voice",
    element: <Voice />,
  },
]);
