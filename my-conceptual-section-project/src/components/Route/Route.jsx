
import { createBrowserRouter } from 'react-router-dom';
import MainLyout from '../MainLyout/MainLyout';
import Home from '../Home/Home';
import Products from '../Home/Products/Products';
import About from '../Home/About/About';
import ShowDetailsProduct from '../Home/Products/ShowDetailsProduct';

const myCreateRoute=createBrowserRouter([
    {
        path:"/",
        element:<MainLyout></MainLyout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/products",
                element:<Products></Products>,
                loader:()=>fetch(`https://dummyjson.com/products`)
            },
            {
                path:"/product/:id",
                element:<ShowDetailsProduct></ShowDetailsProduct>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:"/about",
                element:<About></About>
            },
        ]
    }
])

export default myCreateRoute;