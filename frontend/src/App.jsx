import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {Home} from './pages/home';
 import './app.css';
import { Register } from "./pages/Register";
import { Academics } from "./pages/Academics";
import { FacultyPage } from "./pages/Facultypage";
import { About } from "./pages/About";
import { Jokes } from "./pages/Jokes";
import { ErrorPage } from "./pages/ErrorPage";
import { FacultyProfile } from "./pages/FacultyProfile";
import {Event} from "./pages/event.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/home',
        element:<Home/>
      },
      {
        path:"/admissions",
        element:<Register/>
      }
      ,
      {
        path:"/academics",
        element:<Academics/>
      },
      {
        path:"/faculty",
        element:<FacultyPage/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/jokes",
        element:<Jokes/>
      },
      {
        path:'*',
        element:<ErrorPage/>
      },
      {
        path:'/faculty/:slug',
        element:<FacultyProfile></FacultyProfile>
      },
      {
        path: "/events",
        element: <Event/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
