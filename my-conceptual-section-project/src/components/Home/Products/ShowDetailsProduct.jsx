import { useLoaderData } from "react-router-dom";


const ShowDetailsProduct = () => {
    const product =useLoaderData()
    const {id,brand,images,price}=product;
    return (
        <div className="text-center justify-center items-center">
            <h3 className="text-xl">ID : {id}</h3>
            <img className="flex justify-center items-center" src={images[0]} alt="" />
            <p>{price}</p>

        </div>
    );
};

export default ShowDetailsProduct;