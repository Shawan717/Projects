import { Link } from "react-router-dom";


const Product = ({product}) => {
    console.log(product);
    const{id,brand,images,price}=product
    return (
        <div className="text-center w-[400px] mt-5">
            <h3 className="text-3xl">{brand}</h3>
            <img className="w-[350px] h-[300px]" src={images[0]} alt="" />
            <p>{price}</p>
           {/* <Link to={`/product/${id}`}><button className="btn btn-primary">View Details</button></Link> */}
             <Link to={`/product/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
    );
};

export default Product;