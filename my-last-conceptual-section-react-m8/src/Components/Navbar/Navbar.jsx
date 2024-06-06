import { Link } from "react-router-dom";


const Navbar = () => {
    return (
       <div className="shadow-lg p-5 flex justify-between items-center">
        <h2 className="text-3xl">Phone Shop</h2>
         <div className="text-2xl ">
            <Link className="mr-4" to={"/"}>Home</Link>
            <Link className="mr-4" to={"/favourites"}>Favourites</Link>
            <Link to={"/login"}>Log IN</Link>
        </div>
       </div>
    );
};

export default Navbar;