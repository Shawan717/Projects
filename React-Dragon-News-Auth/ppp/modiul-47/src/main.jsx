import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPg from './components/ErrorPg/ErrorPg';
import JobsDetails from './components/FeaturedJobs/JobsDetails/JobsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPg></ErrorPg>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/jobs/:id",
        element:<JobsDetails></JobsDetails>,
        loader:()=>fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
