// import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Phone from "./Category/Phone";


const Home = () => {
    const phones=useLoaderData()
    console.log(phones);
    return (
        <div >
            <Banner></Banner>
            <Category></Category>
           <div className="grid grid-cols-3 ">
            {
                phones.map(phone=><Phone phone={phone} key={phone.id}></Phone>)
            }
           </div>
   
        </div>
    );
};

export default Home;