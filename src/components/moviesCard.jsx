import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";
export function MovieCard({ movie }) {
  const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.moviecard}>
      <Link to={"/movies/" + movie.id}>
      <img
        width={220}
        height={335}
        className={styles.movieImage}
        src={imagenUrl}
        alt={movie.title}
        />
      <div>{movie.title}</div>
        </Link>
    </li>
  );
}
