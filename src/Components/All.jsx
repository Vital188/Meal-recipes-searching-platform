import Single from './Single';
import { useEffect, useState } from "react";


function All() {

const [error, setError] = useState(null);
const [searchMeal, setSearchMeal] = useState ('');
const [mealis, setMealis] = useState(null)
  
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

// useEffect (() => {
//     if (setMeals === true )
//     { 
//  }, [meals])

   
 

  return (
    <>
    <div className='box'>
    
      <input
        type="text"
        placeholder="Search"
        value={searchMeal}
        onChange={handleChange} 
      ></input>
      <button onClick={search}>SEARCH</button>
      </div>
      <div>
        {
      mealis !== null ? mealis.map(meal => <div className='miskas'> <Single key={meal.idMeal} meal={meal}/></div>) : console.log("prašome palaukti")
       }
    </div>
    </>
  );
}

export default All;


