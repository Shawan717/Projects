import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = ({handleBookMark}) => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>Length {blog.length}</h1>
            {
                blog.map(blog=><Blog blog={blog} key={blog.id} handleBookMark={handleBookMark}></Blog>)
            }
        </div>
    );
};

export default Blogs;