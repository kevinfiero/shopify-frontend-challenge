import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import Nomination from '../../components/Nominations/Nomination';
import NominationList from '../../components/Nominations/NominationList';
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
    console.log(target.value)
    setNominations([...nominations, JSON.parse(target.value)]);
  }

  const handleRemove = ({ target }) => {
    setNominations(nominations.filter(element => element.id !== target.value));
  }

  useEffect(() => { 
    fetchMovies();
    }, [search]);

  return(
    <body className={styles.NominationsPage}>
      <Search search = {search} onChange = {handleSearch}/>
      <div className={styles.Columns}>
        <MoviesList movies = {movies} onClick={handleNomination} />
        <NominationList nominations = {nominations} onClick={handleRemove} />
      </div>
    </body>
  )

}

export default NominationsPage
