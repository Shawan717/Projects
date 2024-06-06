

const Banner = () => {
    return (
        
       <div>
             <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
               <div className=" flex justify-center items-center">
               <input className="flex justify-center items-center p-2 rounded-xl  m-auto w-[500px]" placeholder="Search " type="search" />
               </div>
            </div>
       </div>
        
    );
};

export default Banner;