import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';


const Blogs = ({handleBookmk,handleReadTime}) => {
    const [blg,setBlg]=useState([]);
    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlg(data))
    },[])

    return (
        <div className="w-2/3">
            <h2>blog {blg.length}</h2>
            <div className="mt-4">
            {
                blg.map(bloggg=><Blog key={bloggg.ID} bloggg={bloggg} handleBookmk={handleBookmk} handleReadTime={handleReadTime}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;