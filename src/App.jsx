import Box from "./components/Box";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedSummary from "./components/WatchedSummary";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <SearchBar />
        <SearchResult />
      </Header>
      <main className="main">
        <Box>
          <MovieList />
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
