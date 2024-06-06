import { useState } from "react";


const Countrie = ({country,handleVisitedCountry}) => {
    const{name,flags}=country || {}
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountry);
    return (
        <div>
            <h3>name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}> {visited ?'Visited': 'No visited'} </button>
            {
                visited && 'i have visited'
            }
        </div>
    );
};

export default Countrie;