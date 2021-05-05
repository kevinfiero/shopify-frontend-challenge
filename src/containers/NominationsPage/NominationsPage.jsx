import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/Movies/MoviesList';
import NominationList from '../../components/Nominations/NominationList';
import Information from '../../components/Information/Information';
import Search from '../../components/Search/Search';
import { findMovies } from '../../services/movieAPI';
import styles from './NominationsPage.css'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header/Header';


const NominationsPage = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [nominations, setNominations] = useState([]);
 
  const fetchMovies = () => {
    if(search.length < 2){
      setMovies([]);
    } else {
    findMovies(search).then((movies) => {
      setMovies(movies);
      console.log(movies);
      })
    }
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value), () => fetchMovies();
  }

  const handleNomination = ({ target }) => {
    if(nominations.length === 4){
      setNominations([...nominations, JSON.parse(target.value)]);
      toast('Congrats! You Nominated 5 Movies!', {
        style: {
          background: '#43aa8b',
          border: '1px solid black',
          width: '1000px',
          height: '50px'
        }
      })
    } else if (nominations.length === 5){
      toast('Please Remove A Movie To Nominate Another!', {
        style: {
          background: '#f94144',
          border: '1px solid black',
          width: '1000px',
          height: '50px'
        }
      })
    } else{
      setNominations([...nominations, JSON.parse(target.value)]);
    }
  }

  const handleRemove = ({ target }) => {
    setNominations(nominations.filter(element => element.id !== target.value));
  }

  useEffect(() => { 
    fetchMovies();
    }, [search]);

  return(
    <div className={styles.NominationsPage}>
      <div className={styles.Info}>
        <Header />
        <Search search = {search} onChange = {handleSearch}/>
        <Information nominationCounter = {nominations.length}/>
      </div>
      <div className={styles.Columns}>
        <MoviesList movies = {movies} nominations = {nominations} onClick={handleNomination} />
        <NominationList nominations = {nominations} onClick={handleRemove} />
      </div>
      <Toaster />
    </div>
  )

}

export default NominationsPage
