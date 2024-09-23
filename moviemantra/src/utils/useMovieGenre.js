import { useEffect } from "react";

function useMovieGenre(props)
{
    useEffect(()=>
    {
        getMovieData();
    });

   async function getMovieData()
    {
        const data = await fetch(
            "https://api.themoviedb.org/3/war/movie/list?api_key=8dacece17474e5f5c15064b2f81c9378"
          );    
          const result = await data.json();
          console.log(result);
    }
}

export default useMovieGenre;