import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Cards from "./Cards";

const Movies = () => {
  const [apiData, setApiData] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`,
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  }, [currentUser, navigate]);

  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        {apiData.length > 0 && (
          <img src={`https://image.tmdb.org/t/p/w500/${apiData[0].backdrop_path}`} alt={apiData[0].title} />
        )}
      <div className="hero-title">
        {apiData.length > 0 && (
          <h1>{apiData[0].title}</h1>
        )}
      </div>
      <div className="hero-detail">
        {apiData.length > 0 && (
            <p>{apiData[0].overview}</p>
            )}
      </div>
      <div className="hero-button">
        <button onClick={() => navigate(`/player/${apiData[0].id}`)}>▶Trailer</button>
      </div>
      </div>
      <div className="more-cards">
        <Cards title={"Now Playing"} category={'now_playing'}/>
        <Cards title={"Popular"} category={'popular'}/>
        <Cards title={"Top Rated"} category={'top_rated'}/>
        <Cards title={"Upcoming"} category={'upcoming'}/>
      </div>
    </div>
  );
};

export default Movies;
