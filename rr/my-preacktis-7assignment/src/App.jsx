import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Seleteds from './Components/Header/Seleteds/Seleteds'

function App() {
  const [courseName , setCourseName]=useState([])
  const[time,setTime]=useState(0)
  const[prices,setPrices]=useState(0)
  
  const handleSelected=(title,clock,price)=>{
    const addedCourseName=[...courseName,title]
    setCourseName(addedCourseName)
    const addedClock=time+clock
    setTime(addedClock)
    const newPrice=prices+price;
    setPrices(newPrice)
  }

  return (
    <>
      <h1 className='text-3xl text-center font-bold mt-1'>Course Registration</h1>
   <div className='mt-10 flex max-w-[1600px] mx-auto gap-20'>
    <Header handleSelected={handleSelected}></Header>
    <Seleteds courseName={courseName} clockTime={time} price={prices}></Seleteds>
   </div>
    </>
  )
}

export default App
