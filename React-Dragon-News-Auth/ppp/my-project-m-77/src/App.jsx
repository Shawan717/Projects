
import { useState } from 'react'
import './App.css'
import Blogss from './components/Blogss/Blogss'
import BookMarks from './components/BookMarks'
import Nevbar from './components/Nevbar'

function App() {
  const [title,setTitle]=useState([])
  const [pricee,setPricee]=useState(0)
  const handleTitle=(name,price)=>{
    const newTitle = [...title,name]
    setTitle(newTitle)

    const newPricee=pricee+price
    setPricee(newPricee)
  }

  return (
    <>
      <Nevbar></Nevbar>
      <hr className='mt-5' />
      <div className="flex justify-between ">
        <Blogss handleTitle={handleTitle}></Blogss>
        <BookMarks title={title} price={pricee}></BookMarks>
      </div>

    </>
  )
}

export default App
