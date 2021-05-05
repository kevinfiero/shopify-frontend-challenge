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
      })
    }
  };

  const handleSubmit = () => {
    toast('🔥 Thanks For You Submission! 🔥', {
      style: {
        background: '#2f6690',
        color: 'white',
        border: '1px solid black',
      },
      duration: 3000,
    })

    setTimeout(() => location.reload(), 3000);
    

  }

  const handleSearch = ({ target }) => {
    setSearch(target.value), () => fetchMovies();
  }

  const handleNomination = ({ target }) => {
    if(nominations.length === 4){
      setNominations([...nominations, JSON.parse(target.value)]);
      toast('✨ Congrats! You Nominated 5 Movies! ✨', {
        style: {
          background: '#43aa8b',
          border: '1px solid black',
        }
      })
    } else if (nominations.length === 5){
      toast('❌ You May Only Nominate 5 Movies. Please Remove A Nominee Before Adding Another! ❌', {
        style: {
          background: '#f94144',
          color: 'white',
          border: '1px solid black',
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
        <Information nominationCounter = {nominations.length} onClick={handleSubmit}/>
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
