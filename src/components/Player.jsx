import React, { useState } from "react";
import BackArrow from '../assests/arrow.png';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Player = () => {

    const navigate = useNavigate();

    const [video,setVideo] = useState(null);

    const {id} = useParams();
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`,
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setVideo(response.results[0].key))
        .catch(err => console.error(err));

    return(
        <div className="player">
            <img src={BackArrow} alt="" onClick={() => {navigate(-2)}}/>
            <iframe width="90%" height='90%' src={`https://www.youtube.com/embed/${video}`} frameborder="0" title="Trailer"></iframe>
        </div>
    );
};

export default Player;