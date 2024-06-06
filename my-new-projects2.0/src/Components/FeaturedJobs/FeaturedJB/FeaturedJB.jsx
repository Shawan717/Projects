import { IoLocation } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";



const FeaturedJB = ({jobs}) => {
    const{logo,job_title,company_name,location,salary,remote_or_onsite,job_type}=jobs;
    return (
       <div>
         <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[24px] font-bold ">{job_title}</h2>
    <p className="text-left text-[20px] text-[#757575] py-1">{company_name}</p>
    <div className="text-left py-1">
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] ">{job_type}</button>
    </div>
    <div className="flex gap-3">
        <div className="flex items-center gap-1">
          <IoLocation />
          <h2>{location}</h2>
        </div>
        <div className="flex items-center gap-1">
        <AiFillDollarCircle />
        <h2>{salary}</h2>
        </div>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
     
       </div>
    );
};

export default FeaturedJB;