import { Outlet } from "react-router-dom";
import { Navbar } from "./UI/Navbar";
import { Footer } from "./UI/Footer";

 export const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
 }