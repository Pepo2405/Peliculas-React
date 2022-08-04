import styles from "../styles/MovieDetails.module.css"
import {useParams} from "react-router"
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import {Loading} from "../components/loading";




export function MovieDetails(){


    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null)


    useEffect(()=>{
        setIsLoading(true);
        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
        })
    },[movieId])
    if(isLoading){
        return <Loading></Loading>
    }

    if(!movie) return null;

    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.carta}>

        <img className={styles.col} src={imageUrl} alt={movie.id}></img>
        <div className={styles.col + " " + styles.movieText}>
            <p><strong>Titulo: </strong>{movie.title}</p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre)=>genre.name).join(", ")}
            </p>
            <p>
                <strong>Description: </strong>{movie.overview}
                
            </p>
        </div>
            </div>
        </div>
    )

};