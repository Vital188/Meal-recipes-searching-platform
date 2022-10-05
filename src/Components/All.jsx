import Single from './Single';
import { useEffect, useState } from "react";
import randColor from '../Functions/randColor';
import Food from '../Context/Food';
import { Component } from 'react';




function All() {

const [error, setError] = useState('');
const [searchMeal, setSearchMeal] = useState ('');
const [mealis, setMealis] = useState([])

const [color, setColor ] = useState (null)



useEffect(() => {
  const timerId = setInterval(() => {
      setColor(randColor());
  }, 1500);
  return () => {
      clearInterval(timerId);
  }
}, []);
  
   const search = () => { fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
   
          setMealis(result.meals)
        },
        (error) => {

          setError(error);
        }
      );
      setSearchMeal('');
    }


const handleChange = (e) => {
setSearchMeal(e.target.value)
}


const remove = () => {
  setMealis([]);
}   
 

  return (

    <>
      <Food.Provider value={{
        setMealis
      }}>
        <div className='top-list'>
        <h1 style={{
          color: color
        }}>Easy meal preparation ideas for creative persons</h1>
        </div>


    <div className='box'>
      <input
        type="text"
        placeholder="Please, write you meal here...."
        value={searchMeal}
        // onKeyPress={(e) => e.key === 13 ()}
        onChange={handleChange} 
         style={{
          width: '472px',
          height: '36px',
          borderRadius: '10px',
          marginLeft: '30px',
          paddingLeft: '20px'
         }}></input>
      <button style={{
        width: '150px',
        height: '40px',
        marginLeft: '30px',
        backgroundColor: "white"
      }} onClick={search}
      >SEARCH</button>
      <button style={{
        width: '150px',
        height: '40px',
        marginLeft: '30px',
        backgroundColor: "white"
      }} onClick={remove}>DELETE</button>
      </div>
      <div>
        {
      mealis !== null ? mealis?.map(meal => <div className='miskas'> <Single key={meal.idMeal} meal={meal}/></div>) : <div className='box4'>Sorry, we don't have this meal, please write another 🙂</div>
       }
    </div>
    </Food.Provider>
    </>

  );
}

export default All;


