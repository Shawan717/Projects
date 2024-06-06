import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Favorites from "../components/Favorites/Favorites";
import PhonesDetailsCard from "../components/Phones/Phone/PhonesDetailsCard";


const myCreateRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/phones.json')
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/phonesCard/:id",
                element:<PhonesDetailsCard></PhonesDetailsCard>,
                loader:()=>fetch('/phones.json')
            }
        ]
    }
])
   

export default myCreateRouter;