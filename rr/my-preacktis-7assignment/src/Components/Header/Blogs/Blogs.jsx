

const Blogs = ({blogs,handleSelected}) => {
  const handleClick=(Time,Heading)=>{
    handleSelected(Heading,Time,Price)
  }
    const {Cover,Heading,Title,Price,Time}=blogs

    return (
        <div className="card card-compact w-[280px]  bg-base-100 shadow-xl mt-5">
        <figure><img className=" w-full h-[170px]" src={Cover} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{Heading}</h2>
          <p>{Title}</p>
          
          <div className="flex justify-between">
          <p>$ Price : {Price}</p>
          <p>Credit : {Time} hr</p>
          </div>

          {/* btn */}
            <button onClick={()=>handleClick(Heading,Time,Price)} className="btn btn-info w-[90%] mx-auto">Buy Now</button>
        </div>
      </div>
    );
};

export default Blogs;