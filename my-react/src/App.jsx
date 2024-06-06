

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Title from './Components/Blogs/Title/Title'
import Header from './Components/Header/Header'

function App() {
  const [bookMark,setBookMark]=useState([])
  const [time,setTime]=useState(0)
 const handleBookMark=mark=>{
  const newBookMark=[...bookMark,mark]
  setBookMark(newBookMark)
 }
 const handleTime=ti=>{
  const newTime=time+ti 
  setTime(newTime)
 }
  return (
    <>
     
      <div className="w-[1400px] mx-auto">
      <Header></Header>
      <div className="flex justify-between">
      <Blogs handleBookMark={handleBookMark} handleTime={handleTime}></Blogs>
      <Title bookMark={bookMark} readTime={time}></Title>
      </div>
      </div>
     
    </>
  )
}

export default App
