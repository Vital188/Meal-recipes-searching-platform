import {Routes, Route, useNavigate} from 'react-router-dom';
import Create from './Create';
import {BrowserRouter} from 'react-router-dom'


function Single({ meal }) {

  // useEffect (() => {
  //   if (  null === add ) {
  //     return;}
  //    localStorage.setItem('info', JSON.stringify(add));
  // }, [add])


  //  useEffect (() => {
  // const k = localStorage.getItem('info')
  // if ( null === k) {
  //   setRutul([])} else {
  //     setRutul(JSON.parse(k))}
  // }, [])

  let navigate = useNavigate();
  const navigateToCreate = () => {
    // 👇️ navigate to /Create
    navigate('/Create');
  };
  
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
    
  return (
    <div>
    <button onClick={navigateToCreate} style={{
      height: '80px',
      marginLeft: '100px',
      fontSize: '25px',
      marginTop: '60px',
      cursor: 'pointer',
      color: 'blue',
      border: '2px solid crimson',
      borderRadius: '10px',
      padding: '10px'
    }}>FAVORITE RECEPIES LIST
    </button>
    
    <button onClick={navigateToHome} style={{
      height: '80px',
      marginLeft: '100px',
      fontSize: '25px',
      marginTop: '60px',
      cursor: 'pointer',
      color: 'blue',
      border: '2px solid crimson',
      borderRadius: '10px',
      padding: '10px'
    }}>Home
    </button> 
    <BrowserRouter>
    <Routes>
    <Route path="/create" element={<Create />} />
       <Route path="/" element={<Single/>} /> 
    </Routes> 
    </BrowserRouter>
    <div style={{
        border: '2px solid black',
        margin: '20px'
    }}>
      <h1
        style={{
          color: "black",
          fontSize: "25px",
        }}
      >
        {meal.strMeal}
      </h1>
      <div className="insidebox">
        <img
          style={{
            width: "200px",
            height: "200px",
          }}
          src={meal.strMealThumb}
          alt={meal.strMeal + "-photo"}
        />
        <div
          className="insidebox3"
          style={{
            color: "black",
            fontSize: "16px",
            textAlign: "justify",
            lineHeight: '150%'
          }}
        >
         {meal.strInstructions} 
        </div>
        <ul style={{
            color: "black",
            fontSize: "14px",
            lineHeight: '150%'
          }}>
          <b>INGRIDIENTS:</b>
          <li>{meal.strIngredient1}</li>
          <li>{meal.strIngredient2}</li>
          <li>{meal.strIngredient3}</li>
          <li>{meal.strIngredient4}</li>
          <li>{meal.strIngredient5}</li>
          <li>{meal.strIngredient6}</li>
          <li>{meal.strIngredient7}</li>
          <li>{meal.strIngredient8}</li>
        </ul>
      </div>
      <button  style={{
            cursor: 'pointer'
      }}>ADD INTO FAVORITE LIST</button>
    </div>
    </div>
  );
}

export default Single;
