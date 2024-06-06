import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Favorites from "../Components/Favorites/Favorites";
import Login from "../Components/Login/Login";
import PhoneDetailsCard from "../Components/Favorites/PhoneDetailsCard/PhoneDetailsCard";


const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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
                element:<PhoneDetailsCard></PhoneDetailsCard>,
                loader:()=>fetch('/Phones.json')
            },
        ]
    }
])

export default myCreateRoute;