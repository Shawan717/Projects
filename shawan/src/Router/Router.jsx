import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Header/Home/Home";
import Favorites from "../components/Header/Favorites/Favorites";
import Login from "../components/Header/Login/Login";
import SingleCategorie from "../components/Categories/Categorie/SingleCategorie";


const myCreatRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
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
                element:<SingleCategorie></SingleCategorie>,
                loader:()=>fetch('/phones.json')
            }
        ]
    }
])

export default myCreatRouter;