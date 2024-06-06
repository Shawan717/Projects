import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
    <div className="max-w-[1450px] mx-auto">
            <div className="shadow-md py-5 px-1 flex justify-between items-center">
            <div>
                <h3 className="text-4xl font-bold">Amazon</h3>
            </div>
            <div className="flex gap-3">

            <NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-sky-500" : ""
  }
>
Home
</NavLink>
            <NavLink to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-sky-500" : ""
  }
>
Product
</NavLink>
            <NavLink to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-sky-500" : ""
  }
>
About
</NavLink>

        
            </div>

        </div>
        <Outlet></Outlet>
    </div>
                   
    );
};

export default Header;