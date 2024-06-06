import { useEffect, useState } from "react";
import Category from "./Category/Category";


const JobCategoryList = () => {
    const [categorys,setCategorys]=useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
    return (
     <div>
           <div className="mt-5">
            <h3 className="text-5xl text-center">Job Category List</h3>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="flex justify-between">
            {
                categorys.map(category=><Category key={category.id} category={category}></Category>)
            }
        </div>
     </div>
    );
};

export default JobCategoryList;