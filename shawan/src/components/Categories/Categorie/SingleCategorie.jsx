import { useLoaderData, useParams } from "react-router-dom";
import DetailsSingleCategorie from "../DetailsSingleCategorie";
import { useEffect, useState } from "react";


const SingleCategorie = () => {
    const [phone,setPhone]=useState([])
    const {id}=useParams()
    const idInt=parseInt(id)
    const phones =useLoaderData()
    console.log(phones,idInt);
    useEffect(()=>{
        const findPhone=phones.find(phone=>parseInt(phone.id)===idInt)
        setPhone(findPhone)
    },[phones,idInt])
   
    return (
        <div>
           <DetailsSingleCategorie phone={phone}></DetailsSingleCategorie>
        </div>
    );
};

export default SingleCategorie;