import { Outlet } from "react-router-dom";
import Nevbar from "../Nevbar/Nevbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto">
                <Nevbar></Nevbar>
                <div className="">
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;