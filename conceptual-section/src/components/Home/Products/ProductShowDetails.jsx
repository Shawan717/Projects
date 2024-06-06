import { useLoaderData } from "react-router-dom";


const ProductShowDetails = () => {
    const productDetails=useLoaderData();
    const{id,images}=productDetails
    return (
        <div>
            <p>{id}</p>
            <img src={images[0]} alt="" />
        </div>
    );
};

export default ProductShowDetails;