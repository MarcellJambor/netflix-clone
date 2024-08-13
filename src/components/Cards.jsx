import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`,
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options);
        const data = await response.json();
        setApiData(data.results);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list">
        {apiData.length > 0 ? (
          apiData.map((card) => (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
