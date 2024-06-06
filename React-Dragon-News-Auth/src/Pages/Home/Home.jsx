import { useLoaderData } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import LeftSideNav from "../Sheard/LeftSideNav/LeftSideNav";
import Navbar from "../Sheard/Navbar/Navbar";
import RightSideNav from "../Sheard/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {
    const news=useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins">THis is home</h2>
            <div className="grid grid-cols-4">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }

                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;