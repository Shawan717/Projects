import Titlee from "./Titlee/Titlee";



const Title = ({bookMark,readTime}) => {
    return (
        <div className="w-1/3 text-center">
            <h3 className="text-3xl">Read Time : {readTime}</h3>
            <h3>BookMark : {bookMark.length}</h3>
            {
                bookMark.map((bkmarktitle,idx)=> <Titlee key={idx} bkmarktitle={bkmarktitle}></Titlee>)
            }
        </div>
    );
};

export default Title;