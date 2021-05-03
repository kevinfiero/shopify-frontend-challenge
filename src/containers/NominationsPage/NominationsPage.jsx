import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/app/Movies/MoviesList';
import { findMovies } from '../../services/movieAPI';

const NominationsPage = () => {

 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [nominations, setNominations] = useState([]);
  // const [page, setPage] = useState(0);
  // const [search, setSearch] = useState('');
 

  useEffect(() => { 
    findMovies('ninja').then((movies) => {
      setMovies(movies);
      setLoading(false);
    })
  }, [])


  if(loading) return <ul>Loading</ul>;
  return <MoviesList movies = {movies} />;
}


export default NominationsPage
