import { useEffect, useState } from "react";
import Job from "./Job/Job";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
       <div>
         <div>
            <h2 className="mt-5 text-5xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-2 gap-10 py-10">
            {
                jobs.map(job=><Job key={job.id} job={job}></Job>)
            }
        </div>
       </div>

    );
};

export default FeaturedJobs;