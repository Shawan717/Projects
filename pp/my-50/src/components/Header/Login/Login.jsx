import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.config';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState("")
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegisterError(" ")
        setSuccess(" ")
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified){
                    setSuccess("User Log In SuccessFully")

                }
                else{
                    alert("plz verification your email address")
                }
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })
    }
    const handleForget = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("send reset email", emailRef.current.value);
            return;

        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
            console.log("plz right e vilid email");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("plz checked yout email");

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p>{registerError}</p>
                    }
                    {
                        success && <p>{success}</p>
                    }
                    <p>Pleace<Link to={"/register"}><button className="btn btn-link">Register</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;