import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";




const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState("")
    const [show, setShow] = useState(false)
    const handleAdd = a => {
        a.preventDefault()
        const name = a.target.name.value;
        const email = a.target.email.value;
        const password = a.target.password.value;
        const accepted=a.target.terms.checked
        console.log(email, password,accepted);
        setRegisterError(" ")
        setSuccess(" ")
        if (password.length < 6) {
            setRegisterError("password 6 cha")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Upper Case')
            return;
        }
        else if(!accepted){
            setRegisterError("plz accept terms and conditions")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("SuccessFully ")
                // 
                updateProfile(result.user,{
                    displayName: name,
                    photoURL:"https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=>console.log("profile updated"))
                .catch(error=>{
                    console.log(error);
                })
                // 
                sendEmailVerification(result.user)
             .then(()=>{
                alert('plz verification')
             })

            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)

            })
    }


    return (
        <div className="border">
            <div className="flex justify-center items-centermx-auto ">
                <div >
                    <h2 className="text-2xl">Register</h2>
                    <form onSubmit={handleAdd}>
                        <input type="text" className="border my-2 " name="name" placeholder="Name" id="" required />
                        <br />
                        <input type="email" className="border my-2 " name="email" id="" required />
                        <br />
                        <div className="absolute flex justify-center items-center">
                            <input type={show ? "text" : "password"} className="border my-2" name="password" id="" required />
                            <span className="relative -mr-10" onClick={() => setShow(!show)}>{
                                show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }</span>
                        </div>
                        <br />
                        <br />
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                        <br />
                        <input type="submit" className="btn btn-success border my-2" value="submit" id="" />
                    </form>
                    {
                        registerError && <p>{registerError}</p>
                    }
                    {
                        success && <p>{success}</p>
                    }
                    <p>Alredy Have an account ? please <Link to={"/login"}>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Register;