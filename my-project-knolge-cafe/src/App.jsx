import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

import Title from './components/Title/Title'
import Blogs from './components/Header/Blogs/Blogs'

function App() {
   const [bookmk,setBookmk]=useState([])
   const[readTime,setReadTime]=useState(0)
   
   const handleBookmk=blog=>{
   const newBlog=[...bookmk,blog]
   setBookmk(newBlog)
   }
   const handleReadTime=(ID,time)=>{
    const newTime=readTime+time
    setReadTime(newTime)
    // remove
    const remaining=bookmk.filter(bookmk=>bookmk.ID !== ID)
    setBookmk(remaining)
   }
  return (
    <>
    
     <div className='w-[1400px] mx-auto'>
     <Header></Header>
     <div className='flex'>
      <Blogs handleBookmk={handleBookmk} handleReadTime={handleReadTime}></Blogs>
      <Title bookmk={bookmk} readTime={readTime}></Title>
     </div>
     </div>
     
    </>
  )
}

export default App
