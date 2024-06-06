// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import Phone from "./Phone/Phone";


const CategoryPhones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch('Phones.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

    return (
        <div>
            <h3 className="text-2xl py-5 text-center font-bold">All Category Phones
            </h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default CategoryPhones;