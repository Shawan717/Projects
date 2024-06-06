import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";






const Register = () => {
    
    const {createUser}=useContext(AuthContext);
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault()
        console.log(e.currentTarget);
        const from =new FormData(e.currentTarget)
        const name=from.get('name')
        const photo=from.get('photo')
        const email=from.get('email')
        const password=from.get('password')
        console.log(name,photo,email,password)
        // c-user
        createUser(email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            navigate('/')
        })
        .catch((error) => {
            console.log(error);

        });
        
   
    }
    return (
        <div className='mt-3'>
        <Navbar></Navbar>
        <div className='mt-14'>
            <h2 className='text-3xl text-center'>Pleace Register</h2>


            {/*  */}


            <form onSubmit={handleRegister} className="card-body w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name </span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>

            {/*  */}
            <p className='text-center'>Alredy have an account <Link to={"/Login"}><span className='text-blue-500 font-bold'>Login</span></Link></p>
        </div>
    </div>
    );
};

export default Register;