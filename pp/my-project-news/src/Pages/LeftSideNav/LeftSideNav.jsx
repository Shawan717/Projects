
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='p-4 space-y-6'>
            <h3 className="text-2xl">All Categories</h3>
            {
                categories.map(category=><Link to={`/category/${category.id}`} className='block' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;