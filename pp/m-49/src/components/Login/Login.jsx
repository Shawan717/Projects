import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase.init";
import { useState } from "react";



const Login = () => {
    const [user,setUser]=useState(' ')
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const auth = getAuth(app);

   

    const handleGoogleSignIn = () => {
    
        signInWithPopup(auth,provider)
        .then(retult=>{
            console.log(retult.user);
            setUser("user succes")
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
   
    const handleGithubSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    
    return (
        <div>


            <button onClick={handleGoogleSignIn}>Google Login</button>
            <button onClick={handleGithubSignIn}>GitHub Login</button>
            


            <div>
                <h3>User: {user?.displayName}</h3>
                <p>{user?.user?.email}</p>
                <img src={user?.user?.photoURL} alt="" />
            </div>

        </div>
    );
};

export default Login;