import PropTypes from 'prop-types'; // ES6


const Blog = ({ blog,handleBookMark }) => {
    const { title, cover, author, author_img, reading_time ,posted_date,hashtags} = blog || {}
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={()=>handleBookMark(title)} className='btn'>BookMark</button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    hashtags.map(hash=><span><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;