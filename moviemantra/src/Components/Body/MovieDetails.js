import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails()
{
    const {id} = useParams();
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
      console.log(movieDetails);
      const {
        title,
        poster_path,
        backdrop_path,
        overview,
        release_date,
        genres = [],
        runtime,
        vote_average,
        tagline,
        homepage,
      } = movieDetails;
    return(
        <div className="movie-details-container">
      <div
        className="movie-backdrop"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})` }}
      >
         <div className="backdrop-overlay"></div>
         <div className="movie-poster">
           <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
         </div>
         <div className="movie-title-section">
           <h1 className="movie-title">{title}</h1>
           <p className="movie-tagline">{tagline}</p>
           <span className="release-date">{new Date(release_date).toDateString()}</span>
         </div>
       </div>

       <div className="movie-content">
         <div className="movie-overview">
           <h2>Overview</h2>
           <p>{overview}</p>
         </div>
         </div>

          <div className="movie-info">
           <div className="movie-genres">
           {Array.isArray(genres) ? (
              genres.map((genre) => (
                <span key={genre.id} className="genre">{genre.name}</span>
              ))
            ) : (
              <span className="genre">Genre data unavailable</span>
            )}
           </div> 
           <div className="movie-runtime">
             <h3>Runtime:</h3>
             <span>{runtime} mins</span>
           </div>
           <div className="movie-rating">
             <h3>Rating:</h3>
             <span>{vote_average}/10</span>
           </div>
          </div>

         <div className="movie-links">/       {homepage && (
             <a href={homepage} target="_blank" rel="noopener noreferrer" className="homepage-link">
               Official Website
             </a>
           )}
        </div>
      </div>
    );
}

export default MovieDetails;