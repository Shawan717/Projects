import { Outlet } from "react-router-dom";
// import Banner from "../Banner/Banner";
import Nevbar from "../Nevbar/Nevbar";
// import CategoryPhones from "../CategoryPhones/CategoryPhones";


const MainLayout = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Nevbar></Nevbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;