import { useEffect } from "react"
import MovieListing from "./MovieListing"
import movieApi from "../common/apis/movieApi";
import { APIKey } from "../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      console.log(response.data.results)
    }
    fetchMovies()
  }, [])
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}
export default Home