import { createBrowserRouter as Provider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";

const router = Provider([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;