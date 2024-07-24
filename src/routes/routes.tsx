import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { routeGenerator } from "../utils/routeGeneretor";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
 console.log(routeGenerator(adminPaths))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children:routeGenerator(adminPaths),
   
  },
//   {
//     path: "/student",
//     element: <App></App>,
//     children: routeGenerator(adminPaths),
   
//   },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths),
   
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
