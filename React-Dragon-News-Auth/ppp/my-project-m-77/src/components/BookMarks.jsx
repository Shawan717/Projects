// import BookMarkTitle from "./BookMarkTitle";

import BookMarkTitle from "./BookMarkTitle";



const BookMarks = ({title,price}) => {
    console.log(title);
    return (
        <div className='w-3/1'>
            <div>
            
                {
                    title?.map((titlee,idx)=><BookMarkTitle key={idx} titlee={titlee}></BookMarkTitle>)
                }
            </div>
            <p>Price{price}</p>
        </div>
    );
};

export default BookMarks;