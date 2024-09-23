import { useState , useEffect } from "react";
function useMovieDetails(id)
{
    const [movieDetails , setMovieDetails] = useState([]);
    useEffect(()=>
        {
            getMovieDetails();
        },[])
    async function getMovieDetails() {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8dacece17474e5f5c15064b2f81c9378`
        );
        const result = await data.json();
        setMovieDetails(result);
      }
      return movieDetails;
}
export default useMovieDetails;