import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../Pages/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="bg-gray-500">
            <div className=" h-[100vh] w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Home></Home>
            </div>
        </div>
    );
};

export default MainLayOut;