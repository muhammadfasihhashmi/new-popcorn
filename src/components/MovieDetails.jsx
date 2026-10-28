import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

function MovieDetails({ selectedMovie, setSelectedMovie, setWatchedMovies }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      if (!selectedMovie) return;
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}&i=${selectedMovie}`,
        );
        if (!response.ok) throw new Error("some thing went wrong");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedMovie]);

  const {
    imdbID,
    Title,
    Year,
    Poster,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Director,
    Actors,
  } = movieDetails || {};

  function handleAdd() {
    const movie = {
      imdbID,
      Poster,
      Title,
      imdbRating: Number(imdbRating),
      runtime: Number(Runtime.split(" ")[0]),
      // userRating: PermanentStars,
      // timesUserRated: timesUserRated.current,
    };
    setWatchedMovies((prev) => [...prev, movie]);
    setSelectedMovie(null);
  }

  ("130 min");
  return (
    <>
      {loading && <div className="loader spinner"></div>}
      {!loading && error && <div className="error">{error}</div>}
      {!loading && !error && movieDetails && (
        <div className="details">
          <header>
            <button
              className="back-button"
              onClick={() => setSelectedMovie(null)}
            >
              <ArrowLeft />
            </button>
            <img src={Poster} alt={`Poster of ${Title} movie`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Year} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <button className="btn-add" onClick={handleAdd}>
                + Add to list
              </button>
            </div>
            {/* <div className="rating">
              {isMatched ? (
                `Your given rating is ${matchedMovie.userRating} ⭐`
              ) : (
                <>
                  <RatingStars
                    size={25}
                    PermanentStars={PermanentStars}
                    setPermanentStars={setPermanentStars}
                    timesUserRated={timesUserRated}
                  />
                  {PermanentStars && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div> */}
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
