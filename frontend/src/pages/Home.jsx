import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSerchQuery] = useState("");
  const movies = [
    {
      title: "The Shawshank Redemption",
      release_date: "1994-09-23",
      url: "https://m.media-amazon.com/images/I/81nC1d3tG-L.jpg",
    },
    {
      title: "The Godfather",
      release_date: "1972-03-24",
      url: "https://m.media-amazon.com/images/I/71xZDbDfJNL._AC_SY679_.jpg",
    },
    {
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://m.media-amazon.com/images/I/51k0qa6zY-L.jpg",
    },
    {
      title: "Pulp Fiction",
      release_date: "1994-10-14",
      url: "https://m.media-amazon.com/images/I/51V5ZpFyaFL.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      release_date: "2003-12-17",
      url: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL.jpg",
    },
    {
      title: "Forrest Gump",
      release_date: "1994-07-06",
      url: "https://m.media-amazon.com/images/I/61bWEDrht3L.jpg",
    },
    {
      title: "Inception",
      release_date: "2010-07-16",
      url: "https://m.media-amazon.com/images/I/91ebhe+fAJL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Fight Club",
      release_date: "1999-10-15",
      url: "https://m.media-amazon.com/images/I/51v5ZpFyaFL.jpg",
    },
    {
      title: "The Matrix",
      release_date: "1999-03-31",
      url: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    },
    {
      title: "Goodfellas",
      release_date: "1990-09-19",
      url: "https://m.media-amazon.com/images/I/51MBrN-5GZL.jpg",
    },
    {
      title: "Se7en",
      release_date: "1995-09-22",
      url: "https://m.media-amazon.com/images/I/51D1v1M2YCL.jpg",
    },
    {
      title: "Interstellar",
      release_date: "2014-11-07",
      url: "https://m.media-amazon.com/images/I/71n58uA1tDL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "The Empire Strikes Back",
      release_date: "1980-05-21",
      url: "https://m.media-amazon.com/images/I/71TywoeXJDL.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      release_date: "2001-12-19",
      url: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL.jpg",
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      release_date: "1975-11-19",
      url: "https://m.media-amazon.com/images/I/71DzU3NtFGL._AC_SY679_.jpg",
    },
    {
      title: "Parasite",
      release_date: "2019-05-30",
      url: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_(2019_film).png",
    },
    {
      title: "The Lion King",
      release_date: "1994-06-24",
      url: "https://m.media-amazon.com/images/I/51NLrI2QJBL.jpg",
    },
    {
      title: "Gladiator",
      release_date: "2000-05-05",
      url: "https://m.media-amazon.com/images/I/51A+2eT4iEL.jpg",
    },
    {
      title: "Back to the Future",
      release_date: "1985-07-03",
      url: "https://m.media-amazon.com/images/I/61w+8EQ3V-L.jpg",
    },
    {
      title: "Schindler's List",
      release_date: "1993-12-15",
      url: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSerchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
