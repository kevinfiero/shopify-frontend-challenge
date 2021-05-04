import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import Nomination from '../../components/Nominations/Nomination';
import NominationList from '../../components/Nominations/NominationList';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';

const NominationsPage = () => {

 
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [nominations, setNominations] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(0);

 
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

  const handleNomination = ({ target }) => {
    console.log(target.value)
    setNominations([...nominations, JSON.parse(target.value)]);
  }

  useEffect(() => { 
    fetchMovies();
    }, [search]);

  return(
    <>
      <Search search = {search} onChange = {handleSearch}/>
      <div>
        <MoviesList movies = {movies} nominations = {nominations} onClick={handleNomination} />
        <NominationList nominations = {nominations} />
      </div>

    </>
  )

}


export default NominationsPage
