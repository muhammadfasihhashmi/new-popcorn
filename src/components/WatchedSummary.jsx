function WatchedSummary({ watchedMovies }) {
  const totalMovies = watchedMovies.length;
  const imdbRating = watchedMovies.reduce(
    (sum, movie) => sum + movie.imdbRating,
    0,
  );

  const totalRuntime = watchedMovies.reduce(
    (sum, movie) => sum + movie.runtime,
    0,
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{totalMovies} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{imdbRating.toFixed(0)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>0.0</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{totalRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
