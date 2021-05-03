export const findMovies = search => {
  return fetch('http://www.omdbapi.com/?apikey=70cc810b&s=ninja&type=movie&page=1')
    .then( res => res.json())
    .then(( { Search } ) => Search.map(result => ({
      title: result.Title,
      year: result.Year,
      id: result.imdbID,
      poster: result.Poster
    })))
}
