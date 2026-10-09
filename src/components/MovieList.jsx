import { useEffect, useState } from "react";

const apiUrl = "http://www.omdbapi.com/?apikey=f2eccca1";

function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      if (!query) return;
      try {
        const response = await fetch(`${apiUrl}&s=${query}`);
        if (!response.ok) throw new Error("some thing went wrong");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
