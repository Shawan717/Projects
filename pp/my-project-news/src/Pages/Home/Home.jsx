import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {
    const news=useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h4>This is home</h4>
            <div className="grid grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;