import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobCategoryList></JobCategoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;