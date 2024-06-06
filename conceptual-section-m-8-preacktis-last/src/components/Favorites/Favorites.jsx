import { useEffect } from "react";
import { useState } from "react";
import Phone from "../Phones/Phone/Phone";
import buttonText from "@material-tailwind/react/theme/components/button/buttonText";


const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [nodata, setNoData] = useState(false)
    const[isShow,setIsShow]=useState(false)
    useEffect(() => {
        const favoritesItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoritesItem) {
            setFavorites(favoritesItem)
        }
        else {
            setNoData("No Data Found")
        }


    }, []);
    const handleRemove=()=>{
        localStorage.clear()
        setFavorites([])
        setNoData("No Data Found")
    }

    return (
        <div>
            {nodata ? <p>{ nodata }</p> :
                <div>
                    <div className="flex justify-center items-center ">{favorites.length>0 && <button onClick={handleRemove} className="bg-green-200 p-4">Dellat All</button>}</div>
                    <div className="grid grid-cols-2">
                        {
                           isShow ?  favorites.map(favorite=><Phone key={favorite.id} phone={favorite}></Phone>) :  favorites.slice(0,2).map(favorite=><Phone key={favorite.id} phone={favorite}></Phone>)
                        }
                    </div>
                </div>}
               <div className="flex justify-center items-center text-center">
               <button onClick={()=>setIsShow(!isShow)} className="bg-green-200 p-4 ">{isShow ? "Show Less" : "Show All"}</button> 
               </div>
        </div>
    );
};

export default Favorites;