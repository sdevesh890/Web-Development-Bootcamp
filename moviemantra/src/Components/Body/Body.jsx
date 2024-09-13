import React from "react";
import "./Body.css";
import movieData from "./movieData";

const MovieCart = ({ movieData }) => {
    return (
      <div className="movie-cart">
        <div className="movie-image-container">
          <img src={movieData.thumbnail} alt={movieData.title} className="movie-image" />
          <span className="movie-tag">HD</span>
          <div className="movie-info">
            <button className="movie-year" disabled>{movieData.year}</button>
            <h3 className="movie-title">{movieData.title}</h3>
          </div>
        </div>
      </div>
    );
  };

const Body = () => (
  <div className="Container">
    {
    movieData.map((movie)=>(
      <MovieCart movieData={movie} key={movie.title}/>
    ))}
  </div>
);

export default Body;
