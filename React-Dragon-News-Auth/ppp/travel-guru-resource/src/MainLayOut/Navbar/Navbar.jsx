import { Link } from 'react-router-dom';
import TravelIcon from '../../../public/images/icons/Frame.png';
// import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    const link = <>
        <Link to={'/'}>News</Link>
        <Link to={'/destination'}>Destination</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/login'}>Contact</Link>
    </>
    return (
        <div>
            <div className="navbar flex justify-between items-center">
                <div >
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-[#ffffff33] dropdown-content mt-3 z-[1] font-medium p-2 shadow  rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <img className='w-[120px] h-14' src={TravelIcon} alt="" />
                </div>
                <div>
                   
                    <input className='bg-[#ffffff33] rounded-lg px-20 h-[35px] text-white' type="search" name="" id="" placeholder='Search your Destination...'/>
                </div>
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-10 font-medium">
                        {link}
                    </ul>
                </div>
                <div className="bg-[#F9A51A] px-10 h-[35px] rounded-lg">
                    
                    <Link to={"/login"}><p>Login</p></Link>
                    <Link to={'/Contact'}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;