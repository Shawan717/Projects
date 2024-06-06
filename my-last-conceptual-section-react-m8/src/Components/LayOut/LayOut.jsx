import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const LayOut = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
               
         <Navbar></Navbar>
         <div className="py-10">
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default LayOut;