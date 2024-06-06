import { Link } from "react-router-dom";


const Product = ({product}) => {
    const{id,brand,images}=product;
    return (
        <div className="w-[400px] border-solid border-2 border-indigo-600 p-5 rounded-lg">
            <h2>{id}</h2>
            <img className="w-[300px] h-[200px]" src={images[0]} alt="" />
            <p>{brand}</p>
           
            <Link to={`/productDetails/${id}`}> <button  className="btn btn-primary">Show details </button></Link>
        </div>
    );
};

export default Product;