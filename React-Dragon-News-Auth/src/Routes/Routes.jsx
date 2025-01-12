import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/Home/News";
import PrivateRoutes from "./PrivateRoutes";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default Routes;