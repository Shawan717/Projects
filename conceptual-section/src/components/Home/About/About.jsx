import { Link, Outlet } from "react-router-dom";



const About = () => {
    return (
        <div className="flex  justify-between">
           <div className="w-[30%]  text-2xl">
            <div className="bg-sky-400 block">
            <Link className="m-3" to={'/about'}>Home</Link>
            <Link className="m-3" to={'/about/edit'}>Edit</Link>
            <Link className="m-3" to={'/about/profile'}>Profile</Link>
            <Link className="m-3" to={'/about/section'}>Section</Link>
          
            </div>
           
           </div>
            <div className="w-[50%]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default About;