import { MdOutlineBookmark } from "react-icons/md";


const Blog = ({ blog ,handleAddToBookMark,handleAddToTime}) => {
    const { ID, Cover, Author_img, Author, Title, Hashtags, Reading_Time } = blog

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={Cover} alt="Shoes" /></figure>
            <div className="flex justify-between">
                <div className="flex items-center gap-2 ">
                    <img className="w-[50px] h-[50px]" src={Author_img} alt="" />
                    <p>{Author}</p>

                </div>
                <div>

                    <span className="flex items-center gap-2">{Reading_Time} Read <MdOutlineBookmark onClick={()=>handleAddToBookMark(blog)} className="text-3xl"></MdOutlineBookmark>
                    </span>
                </div>
            </div>
            <p className="text-2xl">{Title}</p>
            <p>{Hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)}</p>
            <p onClick={()=>handleAddToTime(ID,Reading_Time)} className="text-blue-500 mt-5 text-xl">Mark As Read</p>
        </div>
    );
};

export default Blog;