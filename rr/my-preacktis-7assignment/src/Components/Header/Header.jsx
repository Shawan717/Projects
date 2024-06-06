import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./Blogs/Blogs";


const Header = ({handleSelected}) => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className="w-3/5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                blog.map(blogs=><Blogs blogs={blogs} key={blogs.id} handleSelected={handleSelected}></Blogs>)
            }
        </div>
    );
};

export default Header;