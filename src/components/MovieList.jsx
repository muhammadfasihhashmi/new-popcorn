function MovieList({ movies, loading, setSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {loading && <div className="loader spinner"></div>}
      {movies &&
        movies.map((movie) => (
          <li key={movie.imdbID} onClick={() => setSelectedMovie(movie.imdbID)}>
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
