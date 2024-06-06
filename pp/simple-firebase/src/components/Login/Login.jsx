import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';


const Login = () => {
    const [user,setUser]=useState(null)
    const auth=getAuth(app)
    console.log(app);
    const provider=new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            const userInfo=result.user;
            console.log(userInfo);
            setUser(userInfo)
        })
        .catch((error)=>{
            console.log("error",error.message);
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            setUser(null)
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
           {user ? <button onClick={handleSignOut}>Sign Out</button> :
            <button onClick={handleGoogleSignIn}>Google Login</button>}
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>Email : {user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;