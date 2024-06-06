import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookMark,handleTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='w-2/3'>
            <h3>data: {blogs.length}</h3>
            {
                blogs.map(blog=><Blog key={blog.ID} blog={blog} handleBookMark={handleBookMark} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;