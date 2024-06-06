import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Login = () => {
    const{signInUser}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    console.log('location login page',location);
    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)

        const email = from.get('email')
        const password = from.get('password')
        console.log(email, password)
        // c-user
        signInUser(email,password)
        .then((userCredential) => {
            console.log(userCredential.user);
            navigate(location?.state? location.state:'/')
        })
        .catch((error) => {
            console.log(error);

        });
       
    }
    return (
        <div className='mt-3'>
            <Navbar></Navbar>
            <div className='mt-14'>
                <h2 className='text-3xl text-center'>Pleace Login</h2>


                {/*  */}


                <form onSubmit={handleLogin} className="card-body w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                {/*  */}
                <p className='text-center'>Don't have an account <Link to={"/register"}><span className='text-blue-500 font-bold'>Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;