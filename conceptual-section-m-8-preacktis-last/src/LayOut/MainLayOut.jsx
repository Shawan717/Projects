import { Outlet } from "react-router-dom";
import Nevbar from "../components/Nevbar";


const MainLayOut = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Nevbar></Nevbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;