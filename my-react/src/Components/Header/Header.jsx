import React from 'react';
import Profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <h2 className="text-5xl">Knowledge Cafe</h2>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;