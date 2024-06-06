import { useEffect, useState } from "react";
import Categorie from "../../Categories/Categorie/Categorie";



const Favorites = () => {
    const [favoritesCard, setFavoritesCard] = useState([])
    const [isFoundData, setIsFoundData] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(() => {
        const favoritesItem = JSON.parse(localStorage.getItem('favorites'))
        if (favoritesItem) {
            setFavoritesCard(favoritesItem)
            const total=favoritesItem.reduce((preveus,current)=>preveus+current.price,0);
            setTotalPrice(total)
           
        }
        else {
            setIsFoundData("No Data Found")
        }
    }, [])
    const handleRemove = () => {
        localStorage.clear()
        setFavoritesCard("")
        setIsFoundData("No Data Found")

    }

    return (
        <div>
            {
                isFoundData ? <p>{isFoundData}</p> :
                    <div>
                        <div className="flex justify-center items-center">
                            <button onClick={handleRemove} className="bg-green-200 p-4">Remove All</button>
                        </div>
                        <p className="text-xl">Total Price {totalPrice} $</p>
                        <div className="grid grid-cols-2 ">
                            {
                                isShow ? favoritesCard.map(phone => <Categorie key={phone.id} phone={phone}></Categorie>) : favoritesCard.slice(0, 2).map(phone => <Categorie key={phone.id} phone={phone}></Categorie>)
                            }
                        </div>
                        <div className="flex justify-center items-center">
                            {
                                favoritesCard.length > 2 && <button onClick={() => setIsShow(!isShow)} className="bg-green-200 p-4">{isShow ? "See les" : "Show Details"}</button>

                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favorites;