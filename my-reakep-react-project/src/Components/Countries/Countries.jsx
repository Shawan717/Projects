import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countrie,setCountrie]=useState([])
    const [visitedCountry,setVisitedCountry]=useState([]);
   
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountrie(data))
    },[])
    const handleVisitedCountry=country=>{
      const newVisited=[...visitedCountry,country]
      setVisitedCountry(newVisited);
    }
    return (
        <div className="mx-auto">
            <h3 className="text-center text-2xl">Countries {countrie.length}</h3>
            <div>
                <h3>VIsi{visitedCountry.length}</h3>
             
            </div>
          <div className="grid grid-cols-3">
          {
                countrie.map(country=><Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;