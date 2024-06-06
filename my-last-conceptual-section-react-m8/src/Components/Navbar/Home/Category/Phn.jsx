import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import PhoneCart from "./PhoneCart";


const Phn = () => {

    const[phone,setPhone]=useState()

    const {id}=useParams()
    const phones=useLoaderData()


    useEffect(()=>{
        const findPhn=phones.find(phn=>phn.id === id)
        setPhone(findPhn)
    },[id,phones])
  

    return (
      <div>
        <PhoneCart phone={phone}></PhoneCart>
      </div>
    );
};

export default Phn;