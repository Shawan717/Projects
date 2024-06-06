import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogss = ({handleTitle}) => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className="grid gap-5  grid-cols-3 w-3/2">
            {
                user.map(user=><Blog  key={user.ID} user={user} handleTitle={handleTitle}></Blog>)
            }
        </div>
    );
};

export default Blogss;