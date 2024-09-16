import React, { useEffect, useState } from "react";
import "./Body.css";
import Shimmer from "./Shimmer";
const MovieCart = ({ movieData }) => {
  return (
    <div className="MovieCart">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        alt={movieData.title}
      />
      <h3>{movieData.title}</h3>
      <button disabled>{movieData.release_date.split("-")[0]}</button>
    </div>
  );
};


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [MovieData, setMovieData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieAPI();
  }, []);

  async function getMovieAPI() {
    setIsLoading(true);
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8dacece17474e5f5c15064b2f81c9378"
    );
    const result = await data.json();
    setMovieData(result.results);
    setFilteredData(result.results);
    setIsLoading(false);
  }

  function filterData(searchText, movieData) {
    const data = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }

  return (
    <div className="Container">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Please search movie here"
        />
        <button
          type="submit"
          onClick={() => {
            const data = filterData(searchText, MovieData);
            setFilteredData(data);
          }}
        >
          Search
        </button>
      </div>

      {isLoading ? (
        <Shimmer /> // Show multiple shimmer cards when loading
      ) : (
        <div className="movie-list">
          {filteredData.length === 0 ? (
            <p>No movies found</p>
          ) : (
            filteredData.map((movie) => (
              <MovieCart movieData={movie} key={movie.id} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
