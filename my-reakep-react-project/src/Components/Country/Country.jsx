import { useState } from "react";
import './country.css'


const Country = ({country,handleVisitedCountry}) => {
    const {name , flags}=country
    const [activee , setActive]=useState(true)
    const handleActive=()=>{
        setActive(!activee)
    }
    return (
        <div  className={`mx-auto border-solid border-2 border-indigo-600 p-4 m-4 rounded-lg ${activee? "active" : "non-active"}`}>
            <h3 className="text-center m-2 text-3xl font-bold">{name.common}</h3>
            <img src={flags.png} alt="" />
            <button onClick={()=>handleVisitedCountry(country)}>Visited</button><br /> <hr />
            <button  onClick={handleActive}>Go No</button>
        </div>
    );
};

export default Country;