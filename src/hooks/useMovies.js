import { useEffect, useState } from "react";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

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
  return { movies, setMovies, loading, setLoading, query, setQuery };
}

export default useMovies;
