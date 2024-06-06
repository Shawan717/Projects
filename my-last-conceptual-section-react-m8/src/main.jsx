import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Navbar/Home/Home';
import Favourites from './Components/Navbar/Favourites/Favourites';
import LayOut from './Components/LayOut/LayOut';
import Login from './Components/Navbar/Login/Login';
import Phn from './Components/Navbar/Home/Category/Phn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('phones.json')
      },
      {
        path:"/favourites",
        element:<Favourites></Favourites>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/phones/:id",
        element:<Phn></Phn>,
        loader:()=>fetch('phones.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
