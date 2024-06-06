import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { useEffect } from "react";
// import Banner from "../Banner/Banner";


const MainLayout = () => {
    const loc =useLocation();
    useEffect(()=>{
        console.log(loc.pathname);
        if(loc.pathname==="/"){
            document.title=`Phone-Home`
        }
        else{
            document.title=`Phone${loc.pathname.replace("/","-")}`
        }
        if(loc.state){
            document.title=`${loc.state}`;
        }
    },[loc.pathname])
    return (
        <div className="max-w-[1400px] mx-auto">
            
            <Navbar></Navbar>  
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;