import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = ({handleAddToBookMark,handleAddToTime}) => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch("/Blogs.json")
        .then(res=>res.json())
        .then(data=>setBlog(data))

    },[])
    return (
        <div className="w-2/3">
            <p>Hello {blog.length}</p>
            {
                blog.map(blog=><Blog key={blog.ID} blog={blog} handleAddToBookMark={handleAddToBookMark} handleAddToTime={handleAddToTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;