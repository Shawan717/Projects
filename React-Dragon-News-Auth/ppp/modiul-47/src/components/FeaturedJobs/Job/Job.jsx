import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";



const Job = ({ job }) => {
    console.log(job);
    const { id,logo, company_name, job_title, remote_or_onsite, location, salary, job_type } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{job_title}</h2>
                <p>{company_name}</p>
                <div className="card-actions justify-center">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex justify-around">
                    <div className="flex justify-center items-center">
                    <FaLocationDot />
                    <p>{location}</p>
                    </div>
                    <div className="flex justify-center items-center">
                    <AiOutlineDollar />
                    <p>{salary}</p>
                    </div>
                </div>
               <Link to={`/jobs/${id}`}>
               <button className="mx-auto mt-5 btn w-[350px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
               </Link>
            </div>
        </div>
    );
};

export default Job;