import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import '../App.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const SignUp = () => {

    const navigate = useNavigate();

    const {currentUser} = useAuth();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    useEffect(() => {
        if (currentUser){
            navigate('/movies');
        }
    }, [currentUser, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/login');
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (  
        <div className="container">
            <NavBar/>
            <div className="form-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="form">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="alternative">
                    <p>Already have an account?</p><Link to={'/login'}>Login</Link>
                </div>
            </div>
            <div className="footer">
            This is just a portfolio website. All rights reserved for Netflix
            </div>
        </div>
    )
};

export default SignUp;