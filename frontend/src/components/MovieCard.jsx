import { useState, useRef } from "react";
import "../css/MovieCard.css";
function MovieCard({ movie }) {
  const [clicked, setClicked] = useState(false);
  const [isPulsing, setPulse] = useState(false);
  const handleFavorite = () => {
    setClicked(!clicked);

    setPulse(true);
    setTimeout(() => {
      setPulse(false);
    }, 300);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} className="img" />
        <div className="movie-overlay">
        </div>
          <button className="favorite-btn" onClick={handleFavorite}>
            {clicked ? (
              <i className={`fa-solid fa-heart ${isPulsing ? "pulse" : ""}`}></i>
            ) : (
              <i className={`fa-regular fa-heart ${isPulsing ? "pulse" : ""}`}></i>
            )}
          </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
