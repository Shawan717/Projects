import { Outlet } from "react-router-dom";
import Nevbar from "../Nevbar";

const Root = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;