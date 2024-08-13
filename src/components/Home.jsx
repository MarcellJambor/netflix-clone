import {React, useEffect} from "react";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import First from '../assests/first.png';
import Second from '../assests/second.jpg';
import Third from '../assests/third.png';
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const navigate=useNavigate();
    const {currentUser} = useAuth();

    useEffect(() => {
        if (currentUser){
            navigate('/movies');
        }
    }, [currentUser, navigate])

    return(
        <div className="home">
            <NavBar/>
            <div className="header">
                <div className="top">
                Unlimited movies, TV shows, and more
                </div>
                <div className="middle">
                Watch anywhere. Cancel anytime.
                </div>
                <div className="bottom">
                Ready to watch?
                </div>
                <button onClick={() => navigate('/signup')} className="button">Sign Up</button>
            </div>
            <div className="features">
                <div className="picture">
                <img src={First} alt="Enjoy on your Tv" />
                </div>
                <div className="desc">
                <div className="desc-title">
                Enjoy on your TV
                </div>
                <div className="desc-detail">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="desc">
                <div className="desc-title">
                Download your shows   
                </div>
                <div className="desc-detail">
                Save your favorites easily and always have something to watch.
                </div>
                </div>
                <div className="picture">
                <img src={Second} alt="Download your shows to watch offline" />
                </div>
            </div>
            <div className="features">
                <div className="picture">
                <img src={Third} alt="Watch everywhere" />
                </div>
                <div className="desc">
                <div className="desc-title">
                Watch everywhere
                </div>
                <div className="desc-detail">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;