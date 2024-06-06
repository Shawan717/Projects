import React from 'react';
import { CiBookmark } from "react-icons/ci";


const Blog = ({bloggg,handleBookmk,handleReadTime}) => {

    const {ID,Cover,Title,Author,Author_img,Reading_Time,Posted_Date,Hashtags}=bloggg;
    return (
        <div className='my-6  w-[800px]'>
            <img src={Cover} alt={`${Title}`} />
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-5'>
                    <img className='w-14 h-14 ' src={Author_img} alt="" />
                    <div>
                    <p className='text-[20px] font-medium'>{Author}</p>
                    <p>{Posted_Date}</p>
                    </div>
                </div>
                <div onClick={()=>handleBookmk(bloggg)}>
                    <span>{Reading_Time} Min</span>
                    <button className='text-2xl text-red-500'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            <p >
                {
                   Hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>) 
                }
            </p>
            <button onClick={()=>handleReadTime(ID,Reading_Time)}>Read Time</button>
        </div>
    );
};

export default Blog;