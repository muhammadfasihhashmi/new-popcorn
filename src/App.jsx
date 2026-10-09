import { useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedSummary from "./components/WatchedSummary";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <SearchResult />
      </Header>
      <main className="main">
        <Box>
          <MovieList query={query} />
        </Box>
        <Box>
          <WatchedSummary />
          <WatchedMovieList />
        </Box>
      </main>
    </>
  );
}

export default App;
