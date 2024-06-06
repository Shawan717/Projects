import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    console.log(location.pathname);
    if(loading){
        return <h3 className="flex justify-center items-center mt-[30%]"><span className="  loading loading-spinner loading-lg"></span></h3>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
export default PrivateRoute;