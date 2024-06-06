import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins max-w-[1400px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;