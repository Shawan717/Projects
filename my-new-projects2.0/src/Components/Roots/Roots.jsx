import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
     <div>
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
              
        </div>
        <Footer></Footer>
     </div>
    );
};

export default Roots;