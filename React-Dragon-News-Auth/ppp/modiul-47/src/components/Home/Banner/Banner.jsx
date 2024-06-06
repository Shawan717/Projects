import user from'../../../assets/images/user.png'

const Banner = () => {
    return (
     <div className="flex justify-between items-center">
           <div>
            <h2 className="text-6xl">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span></h2>
            <p className='my-5'>Explore thousands of job opportunities with all <br /> the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
        </div>
        <div>
            <img className='h-[600px]' src={user} alt="" />
        </div>
     </div>
    );
};

export default Banner;