import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {Home} from './pages/home';
 import './App.css';
import { Register } from "./pages/Register";
import { Academics } from "./pages/Academics";
import { FacultyPage } from "./pages/Facultypage";
import { About } from "./pages/About";
import { Jokes } from "./pages/Jokes";
import { ErrorPage } from "./pages/ErrorPage";
import { FacultyProfile } from "./pages/FacultyProfile";
import {Event} from "./pages/event.jsx";
import {PLogin} from "./pages/PLogin.jsx";
import {Admission2025} from "./pages/Admission2025.jsx";

import {ProceedPayment} from "./pages/ProceedPayment.jsx";
import {StudentPage} from "./pages/Students.jsx";
import {Results} from "./pages/Results.jsx";
import CampusLife from "./pages/CampusLife.jsx";
import {Scholarship} from "./pages/Scholorship.jsx";
import {FormSuccessPage} from "./components/FormSuccessPage.jsx";
import {FAQs} from "./pages/Faqs.jsx";
import {ContactUs} from "./pages/ContactUs.jsx";
import Dashboard from "./admin/dashboard.jsx";
import FinancialOversight from "./admin/financeOversight.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import  {ProtectedRoute } from "./components/authContext.jsx";
import {PlacementDrive} from "./pages/PlacementDrive.jsx";
import {Alumni} from "./pages/Alumni.jsx";
import {Entrepreneurship} from "./pages/Enterpreneurship.jsx";
import {ApplyCertificate} from "./pages/ApplyCertificate.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
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
      },
      {
        path: "/principle-login",
        element: <PLogin/>
      },
      {
        path: "/admissions-2025",
        element: <Admission2025/>
      },
      {
      path:"/proceed-payment",
        element: <ProceedPayment></ProceedPayment>
      },
      {
        path: "/students",
        element: <StudentPage/>
      },
      {
        path: "/result",
        element:<Results></Results>
      },
      {
        path: "/campus-life",
        element:<CampusLife></CampusLife>
      },
      {
        path: "/scholarship",
        element: <Scholarship/>
      },
      {
        path:"form-submitted",
        element:<FormSuccessPage/>
      },{
      path:"/faqs",
        element:<FAQs></FAQs>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/admin/dashboard",
        element:<ProtectedRoute> 
          <Dashboard/>
        </ProtectedRoute> 
      },
      {
        path:"/admin/finance-oversight",
        element:(
        
        <ProtectedRoute>
           <FinancialOversight/>
           </ProtectedRoute>)
      },{
      path:"/placement-drive",
        element:<PlacementDrive/>
      },
      {
        path: "/more-about-placement",
        element:<PlacementDrive/>
      },
      {
        path:"/alumni",
        element:<Alumni/>
      },
      {
        path:"/entrepreneurship",
        element:<Entrepreneurship/>
      },
      {
        path:"/apply-certificate",
        element:<ApplyCertificate/>
      }
    ],
  },
]);

const App = () => (
  <AuthProvider>
   <RouterProvider router={router} />;
  </AuthProvider>
);

export default App;
