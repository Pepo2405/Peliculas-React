import { MovieCard } from "./moviesCard";
import styles from "../styles/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Loading } from "./loading";
import { useQuery } from "../hooks/useQuery";



export function MoviesGrid() {
  const [isLoading,setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const search = query.get("search");
  
  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search 
    ? "/search/movie?query=" + search 
    : "/discover/movie"

    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  
  useEffect(() => {
    setIsLoading(true);

    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  
  if (isLoading) {
    return <Loading></Loading>
  };
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map(function (movie) {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
