import { Link } from "react-router-dom";


const ErrorPg = () => {
    return (
        <div className="lg:text-center">
            <h2 className="text-5xl">Oops...!</h2>
            <button className="btn btn-success mt-10"><Link to="/">Go Back</Link></button>
        </div>
    );
};

export default ErrorPg;