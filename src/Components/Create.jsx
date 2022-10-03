import { useContext } from "react";
import Food from "../Context/Food";

function Create() {

    // const {setMealis} = useContext(Food);

//  const remove = () => {
//     setMealis([])
//  };

    
    return (
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
          {/* {meal.strMeal} */}
        </h1>
        <div className="insidebox">
          {/* <img
            style={{
              width: "200px",
              height: "200px",
            }}
            src={meal.strMealThumb}
            alt={meal.strMeal + "-photo"}
          /> */}
          <div
            className="insidebox3"
            style={{
              color: "black",
              fontSize: "16px",
              textAlign: "justify",
              lineHeight: '150%'
            }}
          >
           {/* {meal.strInstructions} */}
          </div>
          {/* <ul style={{
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
          </ul> */}
        </div>
        <button  style={{
              cursor: 'pointer'
        }}>ADD INTO FAVORITE LIST</button>
      </div>
    );
  }
  
  export default Create;