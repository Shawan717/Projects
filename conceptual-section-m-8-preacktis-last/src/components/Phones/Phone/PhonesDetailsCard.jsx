import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SinglePhoneCard from "./SinglePhoneCard";


const PhonesDetailsCard = () => {
    const[phone,setPhone]=useState()
    const {id}=useParams()
    const idInt=parseInt(id)
    const phones=useLoaderData()
    // console.log(idInt,phones);
    useEffect(()=>{
        const findPhone=phones.find(phone=>parseInt(phone.id)===idInt)
        setPhone(findPhone)
    },[idInt,phones])
    
    return (
        <div>
            <SinglePhoneCard singlePhone={phone}></SinglePhoneCard>
        </div>
    );
};

export default PhonesDetailsCard;