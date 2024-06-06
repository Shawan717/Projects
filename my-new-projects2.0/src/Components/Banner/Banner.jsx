import React from 'react';
import BannerTitle from './BannerTitle/BannerTitle';
import BannerIMG from './BannerIMG/BannerIMG';

const Banner = () => {
    return (
        <div className='border-solid border-2 border-indigo-600 flex h-[700px] justify-center items-center'>
            <BannerTitle></BannerTitle>
            <BannerIMG></BannerIMG>
        </div>
    );
};

export default Banner;