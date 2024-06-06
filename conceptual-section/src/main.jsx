import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Home/Products/Products.jsx';
import About from './components/Home/About/About.jsx';
import ProductShowDetails from './components/Home/Products/ProductShowDetails.jsx';
import AboutEdit from './components/Home/About/AboutEdit.jsx';
import AboutProfile from './components/Home/About/AboutProfile.jsx';
import AboutSection from './components/Home/About/AboutSection.jsx';
// import AboutEdit from './components/Home/About/AboutEdit.jsx';
// import AboutProfile from './components/Home/About/AboutProfile.jsx';
// import AboutSection from './components/Home/About/AboutSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
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
        path:"/productDetails/:id",
        element:<ProductShowDetails></ProductShowDetails>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path:"/about",
        element:<About></About>,
        children:[
          {
            path:'/about/edit',
            element:<AboutEdit></AboutEdit>
          },
          {
            path:'/about/profile',
            element:<AboutProfile></AboutProfile>
          },
          {
            path:'/about/section',
            element:<AboutSection></AboutSection>
          },
        ]
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
