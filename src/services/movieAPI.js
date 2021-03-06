export const findMovies = search => {
  return fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=movie&page=1`)
    .then(res => res.json())
    .then(({ Search }) => {
      if (Search) {
        return Search.map(result => {
          if (result.Poster === 'N/A') { result.Poster = 'https://www.reelviews.net/resources/img/default_poster.jpg' }
          return ({
            title: result.Title,
            year: result.Year,
            id: result.imdbID,
            poster: result.Poster
          })
        })
      } else {
        return [];
      }
    })
    .then(res => (res.filter((elem, index, self) => self.findIndex(
          (t) => { return (t.id === elem.id) }) === index))
      )
}
