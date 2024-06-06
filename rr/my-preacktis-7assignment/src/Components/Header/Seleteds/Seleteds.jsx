import Title from "./Title/Title";


const Seleteds = ({ courseName,clockTime ,price}) => {
    console.log(courseName);
    return (
        <div className="w-2/5">
            <h3 className="text-3xl font-bold">Course Name</h3>
            {
                courseName.map((courseNm, idx) => <Title key={idx} courseNm={courseNm}></Title>)
            }
            <p>Time{clockTime}</p>
            <p>{price}</p>
        </div>
    );
};

export default Seleteds;