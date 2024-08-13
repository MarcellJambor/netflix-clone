import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import '../App.css';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/movies');
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (  
        <div className="container">
            <NavBar/>
            <div className="form-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="form">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
                <div className="alternative">
                    <p>Already have an account?</p><Link to={'/signup'}>Sign Up</Link>
                </div>
            </div>
            <div className="footer">
            This is just a portfolio website. All rights reserved for Netflix
            </div>
        </div>
    )
};

export default Login;