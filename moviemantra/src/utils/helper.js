export function filterData(searchText, movieData) {
    const data = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }