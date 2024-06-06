import { Link, Outlet } from "react-router-dom";


const MainLyout = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="shadow-md py-5 px-1 flex justify-between items-center">
                <div>
                    <h3 className="text-4xl">Amazon</h3>
            </div>
          <div className="flex gap-5 text-2xl">
             <Link to={"/"}>Home</Link>
             <Link to={"/products"}>Products</Link>
             <Link to={"/about"}>About</Link>
          </div>
            </div>
      
            <Outlet></Outlet>
        </div>
    );
};

export default MainLyout;