
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks,setBookMark]=useState([])
  const [times,setTimes]=useState(0)
  const handleAddToBookMark=blog=>{
    const newBookMark=[...bookMarks,blog]
    setBookMark(newBookMark)

  }
  const handleAddToTime=(ID,time)=>{
    const newTime=parseInt(times)+parseInt(time)
    setTimes(newTime)
    const remaining=bookMarks.filter(bkMark=>bkMark.ID !== ID)
    setBookMark(remaining)
  }
  return (
    <div className='max-w-[1400px] mx-auto'>
      <Header></Header>
      <div className='flex mt-10'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleAddToTime={handleAddToTime}></Blogs>
        <BookMarks bookMarks={bookMarks} times={times}></BookMarks>
      </div>
    </div>
  )
}

export default App
