import BookMark from "./BookMark/BookMark";


const BookMarks = ({bookMarks,times}) => {



console.log(bookMarks);
    return (
        <div className="w-1/3">
          <p>Read Time {times}</p>
          <p>
          BookMarks {bookMarks.length}
          </p>
          {
            bookMarks.map((bookMark,idx)=><BookMark key={idx} bookMark={bookMark}></BookMark>)
          }
         
        </div>
    );
};

export default BookMarks;