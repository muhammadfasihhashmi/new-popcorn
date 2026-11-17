import { useEffect, useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedSummary from "./components/WatchedSummary";
import MovieDetails from "./components/MovieDetails";
import useMovies from "./hooks/useMovies";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState(() => {
    const raw = localStorage.getItem("watched");
    if (raw) return JSON.parse(raw);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  const { loading, movies, query, setQuery } = useMovies();

  return (
    <>
      <Header>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <SearchResult movies={movies} />
      </Header>
      <main className="main">
        <Box>
          <MovieList
            movies={movies}
            loading={loading}
            setSelectedMovie={setSelectedMovie}
          />
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watchedMovies} />
          <WatchedMovieList watchedMovies={watchedMovies} />
        </Box>
      </main>
      {selectedMovie && (
        <div className="modal-overlay">
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setWatchedMovies={setWatchedMovies}
            watchedMovies={watchedMovies}
          />
        </div>
      )}
    </>
  );
}

export default App;
