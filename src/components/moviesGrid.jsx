import { MovieCard } from "./moviesCard";
import styles from "../styles/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Loading } from "./loading";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";



export function MoviesGrid() {
  const [isLoading,setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page,setPage] = useState(1);
  const query = useQuery();
  const search = query.get("search");
  
  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search 
    ? "/search/movie?query=" + search  +"&page=" + page
    : "/discover/movie?page=" + page 

    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setIsLoading(false);
    });
  }, [search, page]);
  
  useEffect(() => {
    setIsLoading(true);

    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  
  
  
  return (
    <InfiniteScroll loader={<Loading></Loading>} dataLength={movies.length} hasMore={true} next={()=>{setPage((prevPage)=> prevPage + 1)}}>
    <ul className={styles.moviesGrid}>
      {movies.map(function (movie) {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
      </InfiniteScroll>
  );
}
