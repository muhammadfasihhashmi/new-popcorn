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

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      if (!query) return;
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}&s=${query}`,
        );
        if (!response.ok) throw new Error("some thing went wrong");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

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
          <WatchedSummary />
          <WatchedMovieList watchedMovies={watchedMovies} />
        </Box>
      </main>
      {selectedMovie && (
        <div className="modal-overlay">
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setWatchedMovies={setWatchedMovies}
          />
        </div>
      )}
    </>
  );
}

export default App;
