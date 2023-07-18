import { useSelector } from "react-redux"
import "./MovieListing.css"
import { getAllMovies, getAllShows } from "../features/movies/movieSlice"
import MovieCard from "./MovieCard";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    console.log(movies);

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {movies.map(movie => <MovieCard key={movie.id} data={movie} />)}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {shows.map(show => <MovieCard key={show.id} data={show} />)}
                </div>
            </div>
        </div>
    )
}
export default MovieListing