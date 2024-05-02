import { createBrowserRouter as Provider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import Login from "../Components/Login";
import JobDetails from "../Pages/JobDetails";
import Profile from "../Pages/Profile";

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
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
