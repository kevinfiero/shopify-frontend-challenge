import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';

const NominationsPage = () => {

 
  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [nominations, setNominations] = useState([]);
  // const [page, setPage] = useState(0);
  const [search, setSearch] = useState('table');
 
  const fetchMovies = () => {
    findMovies(search).then((movies) => {
      setMovies(movies);
  })};


  useEffect(() => { 
    fetchMovies();
    }, []);

  return(
    <>
      <Search />
      <MoviesList movies = {movies} />
    </>

  )

}


export default NominationsPage
