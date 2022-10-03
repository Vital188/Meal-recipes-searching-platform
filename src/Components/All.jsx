import Single from './Single';
import { useEffect, useState } from "react";


function All() {

const [error, setError] = useState(null);
const [searchMeal, setSearchMeal] = useState ('');
const [mealis, setMealis] = useState([])
  
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
        placeholder="Please, write you meal here...."
        value={searchMeal}
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
        marginLeft: '30px'
      }} onClick={search}>SEARCH</button>
      <button style={{
        width: '150px',
        height: '40px',
        marginLeft: '30px'
      }} onClick={search}>SEARCH</button>
      </div>
      <div>
        {
      mealis !== null ? mealis?.map(meal => <div className='miskas'> <Single key={meal.idMeal} meal={meal}/></div>) : console.log("prašome palaukti")
       }
    </div>
    </>
  );
}

export default All;


