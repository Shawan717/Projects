// import React, { useEffect, useState } from 'react';
// import Jobs from './Jobs/Jobs';

const JobCategoryList = () => {
    // const [job,setJob]=useState([]);
    // useEffect(()=>{
    //     fetch('categories.json')
    //     .then(res=>res.json())
    //     .then(data=>setJob(data))
    // },[])
    // console.log(job);
    return (
        <div className="mt-8 text-center">
            <h2 className="text-5xl text-[#1A1919] font-bold">Job Category List </h2>
            <p className="mt-3 text-[16px] text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            {/* {
                job.map(JobCategory=><Jobs key={JobCategory.id} jobs={JobCategory}></Jobs>)
            } */}
        </div>
    );
};

export default JobCategoryList;