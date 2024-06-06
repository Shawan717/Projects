import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdAssuredWorkload } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";






const JobsDetails = () => {
    const jobs = useLoaderData()
    // const {job_description}=jobs
    const { id } = useParams()

    const job = jobs.find(job => parseInt(job.id) === parseInt(id))
    console.log(job);
    return (
        <div className="py-40">
           <h3 className="font-bold py-5 text-2xl text-center">Job Details</h3>
            <div className="grid grid-cols-4  gap-10 ">
                <div className=" col-span-3 ">
                    <p className="py-2"><span className="font-bold">Job Description : </span>{job.job_description}</p>
                    <p className="py-2"><span className="font-bold">Job Responsibility : </span>{job.job_responsibility}</p>
                    <p className="py-2"><span className="font-bold">Educational Requirements: <br /> </span>{job.educational_requirements}</p>
                    <p className="py-2"><span className="font-bold">Experiences: </span>{job.experiences}</p>
                </div>


                <div className=" col-span-1 ">
                    <div className="bg-[#eceaf0] p-5 rounded-lg">
                    <h2 className="text-xl font-bold py-2">Job Details</h2>
                    <hr />
                    <p className="flex items-center py-2"><HiCurrencyDollar className="mr-2" /> {job.salary} (Per Month)</p>
                    <p className="flex items-center"><MdAssuredWorkload className="mr-2" />{job.job_title}</p>
                    <h2 className="text-xl font-bold py-2">Job Details</h2>
                    <hr />
                    <p className="flex items-center"><FaPhoneAlt className="mr-2"/> {job.contact_information.phone} </p>
                    <p className="flex items-center py-2"><MdEmail className="mr-2"/> {job.contact_information.email} </p>
                    <p className="flex items-center "><FaLocationDot className="mr-2"></FaLocationDot> {job.contact_information.address} </p>
                    </div>


                    <button className="mt-2 btn bg-gradient-to-r w-full from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                </div>

            </div>
            

        </div>
    );
};

export default JobsDetails;