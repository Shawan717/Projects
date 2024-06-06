import { FaBookmark } from "react-icons/fa";


const Blog = ({blog,handleBookMark,handleTime}) => {
    const {Cover,ID,Author, Author_img,Posted_Date,Title,Reading_Time,Hashtags}=blog;
    return (
        <div className="my-8" >
            <img src={Cover} alt="" />
            <div className="flex justify-between">
                <div className="flex justify-center items-center gap-5">
                    <img className='w-14 h-14 ' src={Author_img} alt="" />
                    <div>
                    <p className='text-[20px] font-medium'>{Author}</p>
                    <p>{Posted_Date}</p>
                    </div>
                </div>
                <div>
                    <span>{Reading_Time} Min</span>
                    <button onClick={()=>handleBookMark(blog)} className='text-2xl text-red-500'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            <p >
                {
                   Hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>) 
                }
            </p>
            <button onClick={()=>handleTime(Reading_Time)}>Read Time</button>
            
       
        </div>
    );
};

export default Blog;