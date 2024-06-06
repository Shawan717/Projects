import { NavLink } from "react-router-dom";


const Nevbar = () => {
    return (
        <div className="flex justify-between py-5 px-1 shadow-lg">
            <div>
                <h3 className="text-3xl">Phone Shop</h3>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-5 text-[20px]">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Home</NavLink></li>
                        <li><NavLink to="/favorites" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Favorites</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-300 underline" : ""}>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nevbar;