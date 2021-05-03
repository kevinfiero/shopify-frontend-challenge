import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';

const NominationsPage = () => {

 
  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [nominations, setNominations] = useState([]);
  // const [page, setPage] = useState(0);
  const [search, setSearch] = useState('cat');
 
  const fetchMovies = () => {
    console.log('test');
    findMovies(search).then((movies) => {
      setMovies(movies);
  })};

  const handleSearch = ({ target }) => {
    console.log(target.value);
    setSearch(target.value), () => fetchMovies();
  }


  useEffect(() => { 
    fetchMovies();
    }, []);

  return(
    <>
      <Search search = {search} onChange = {handleSearch}/>
      <MoviesList movies = {movies} />
    </>

  )

}


export default NominationsPage
