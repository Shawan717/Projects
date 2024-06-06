

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'

import Header from './Components/Header/Header'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [bookmark,setBookMark]=useState([])
  const handleBookMark=blog=>{
    const newBookMark=[...bookmark,blog]
    setBookMark(newBookMark)
  }
 

  return (
    <>
    
     <Header></Header>
     <div className="flex max-w-7xl mx-auto">
     <Blogs handleBookMark={handleBookMark}></Blogs>
     <BookMarks bookmark={bookmark}></BookMarks>
     </div>
      

    </>
  )
}

export default App
