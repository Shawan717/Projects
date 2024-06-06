import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../Countrie";


const Countries = () => {
    const [countrie, setCountrie] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrie(data))
    }, [])
    const handleVisitedCountry = country => {
       const newVisitedCountry=[...visitedCountry,country]
       setVisitedCountry(newVisitedCountry)
    }
    return (
        <div>
            <h3>hello {countrie.length}</h3>
            <h1>Visited {visitedCountry.length}</h1>
            {
                countrie.map(country => <Countrie country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    key={country.cca3}></Countrie>)
            }
        </div>
    );
};

export default Countries;