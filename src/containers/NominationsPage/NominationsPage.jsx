import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';

const NominationsPage = () => {

 
  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [nominations, setNominations] = useState([]);
  // const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
 
  const fetchMovies = () => {
    if(search.length < 2){
      setMovies([]);
    } else {
    findMovies(search).then((movies) => {
      setMovies(movies);
      })
    }


};

  const handleSearch = ({ target }) => {
    setSearch(target.value), () => fetchMovies();
  }


  useEffect(() => { 
    fetchMovies();
    }, [search]);

  return(
    <>
      <Search search = {search} onChange = {handleSearch}/>
      <MoviesList movies = {movies} />
    </>

  )

}


export default NominationsPage
