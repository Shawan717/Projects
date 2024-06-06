import BookMarks from "./BookMarks";




const Title = ({bookmk,readTime}) => {
   
    return (
        <div className="w-1/3">
            <h3 className="text-4xl">Read Time{readTime}</h3>
            <h3>title {bookmk.length}</h3>
          {
            bookmk.map((bookMarks ,idx)=><BookMarks key={idx} bookMarks={bookMarks}></BookMarks>)
          }
        </div>
    );
};

export default Title;