import { useEffect, useState } from "react";
import FeaturedJB from "./FeaturedJB/FeaturedJB";


const FeaturedJobs = () => {
    const [featuredJobs,setFeaturedJobs]=useState([]);
    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setFeaturedJobs(data))
    })
    return (
        <div className="mt-16 text-center">
            <div>
               <h2 className="text-5xl text-[#1A1919] font-bold">Featured Jobs</h2>
                <p className="mt-3 text-[16px] text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-20">
                {
                    featuredJobs.map(jobs=><FeaturedJB key={jobs.id} jobs={jobs}></FeaturedJB>)
                }
            </div>
            <button className="btn btn-primary mx-auto w-28 mt-6">Show All</button>
        </div>
    );
};

export default FeaturedJobs;