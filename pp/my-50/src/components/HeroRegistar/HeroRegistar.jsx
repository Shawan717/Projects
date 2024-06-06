import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const HeroRegistar = () => {
    const [registerError, setRegisterError] = useState("")
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)

    const handleSub = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const accepted=e.target.terms.checked
        console.log(email, password,accepted);
        setRegisterError(" ")
        setSuccess(" ")
        if (password.length < 6) {
            setRegisterError("password 6 caret ")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("boro hater")
            return;
        }
        else if(!accepted){
            setRegisterError("plz terms and conditions")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("SuccessFully")
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
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
                    <form onSubmit={handleSub} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                           
                                <div className="flex justify-center items-center w-full relative">
                                    
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered w-full" required />
                                
                                    <div className="-mr-60 absolute">
                                    <h1 onClick={() => setShow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</h1>
                                    </div>
                                </div>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <input type="checkbox" name="terms" id="" />
                            <label htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="p-5">
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegistar;