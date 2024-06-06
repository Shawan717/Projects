import React, { useEffect, useState } from 'react';
import Phone from '../CategoryPhones/Phone/Phone';

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow,setIsShow]=useState(false)
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(() => {
        const favoritesItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoritesItem) {
            setFavorites(favoritesItem)
            const total=favoritesItem.reduce((preventValue,currentValue)=>preventValue+currentValue.price,0)
            setTotalPrice(total)
        }
        else {
            setNoData("NO DATA")
        }
    }, [])
    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoData("NO DATA")
    }
    return (
        <div>

            {noData ? <p>{noData}</p> : <div>
                <button className="bg-green-200 mx-auto flex justify-center mt-5 p-3" onClick={handleRemove} >Remove All</button>
                <h2 className="text-2xl">Total Price {totalPrice}</h2>
                <div className='grid grid-cols-2 '>
                    {
                        isShow ? 
                            favorites.map(favorite => <Phone key={favorite.id} phone={favorite}></Phone>)
                            :
                            favorites.slice(0,2).map(favorite => <Phone key={favorite.id} phone={favorite}></Phone>)

                        
                    }
                </div>
                {
                    favorites.length>2 && <button className="bg-green-200 mx-auto flex justify-center mt-5 p-3" onClick={()=>setIsShow(!isShow)} >{isShow ? <p>See Less</p>: <p>See More</p>} </button>
                }
            </div>


            }

        </div>
    );
};

export default Favorites;



// import { useEffect, useState } from "react";
// import Phone from "../CategoryPhones/Phone/Phone";


// const Favorites = () => {
//     const [favorite,setFavorite]=useState([]);
//     const[notFound,setNotFound]=useState(false)
//     const [isShow,setIsShow]=useState(false)
//     useEffect(()=>{
//         const favoritesItem=JSON.parse(localStorage.getItem('favorite'))
//         if(favoritesItem){
//             setFavorite(favoritesItem)
//         }
//         else{
//             setNotFound("No Data Found")
//         }
//     },[])
//     const handleRemove=()=>{
//         localStorage.clear()
//         setFavorite([])
//         setNotFound("No Data Found")

//     }
//     return (
//         <div>
//             {
//                 notFound ? <p>{notFound}</p>:<div>
//                     <button className="bg-green-200 mx-auto flex justify-center mt-5 p-3" onClick={handleRemove} >Remove All</button>
//                     <div className="grid grid-cols-2 mx-auto">
//                         {
//                             isShow? favorite.map(favorit=><Phone key={favorit.id} phone={favorit}></Phone>) : favorite.slice(0,2).map(favorit=><Phone key={favorit.id} phone={favorit}></Phone>)
//                         }
//                     </div>
//                     <button className="bg-green-200 mx-auto flex justify-center mt-5 p-3" onClick={()=>setIsShow(!isShow)} >{isShow? "See Less" :"See More"}</button>
//                 </div>
//             }
//         </div>
//     );
// };

// export default Favorites;