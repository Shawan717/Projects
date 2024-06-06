import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Categories from "../../Categories/Categories";


const Home = () => {
    const phones=useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Categories phones={phones}></Categories>
        </div>
    );
};

export default Home;