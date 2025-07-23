import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';
function Home() {
  const [searchQuery, setSerchQuery] = useState("");
  const movies = [
    {
      id: 1,
      title: "Spider-man",
      release_date: "2000"
    }
  ];
  const handleSearch = (e) => {
    e.preventDefault()
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={
            (e) => setSerchQuery(e.target.value)
          }        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
