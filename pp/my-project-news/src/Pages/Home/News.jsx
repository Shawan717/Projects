import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";


const News = () => {
    const{id}=useParams()
    console.log(id);
    return (
        <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <h2 className="text-5xl">News Details</h2>
                <p>{id}</p>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
    );
};

export default News;