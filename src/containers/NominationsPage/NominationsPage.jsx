import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import NominationList from '../../components/Nominations/NominationList';
import Information from '../../components/Information/Information';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';
import styles from './NominationsPage.css'

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
    setNominations([...nominations, JSON.parse(target.value)]);
  }

  const handleRemove = ({ target }) => {
    setNominations(nominations.filter(element => element.id !== target.value));
  }

  useEffect(() => { 
    fetchMovies();
    }, [search]);

  return(
    <div className={styles.NominationsPage}>
      <Information nominationCounter = {nominations.length}/>
      <Search search = {search} onChange = {handleSearch}/>
      <div className={styles.Columns}>
        <MoviesList movies = {movies} nominations = {nominations} onClick={handleNomination} />
        <NominationList nominations = {nominations} onClick={handleRemove} />
      </div>
    </div>
  )

}

export default NominationsPage
