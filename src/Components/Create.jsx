import { useEffect, useState, } from "react";
import Dish from "./Dish";

function Create() {
  const [dishes, setDishes] = useState([]);


  useEffect(() => {
    const k = localStorage.getItem("favourite");
    if (null === k) {
      setDishes([]);
    } else {
      setDishes(JSON.parse(k));
    }
  }, []);

  const remove = () => {
    setDishes([]);
  };

  return (
    <div>
      <div>
        {dishes?.map((dish) => (
          <Dish key={dish.idMeal}  dish={dish} />
       ))} 
      </div>
      <button
        onClick={remove}
        style={{
          cursor: "pointer",
        }}
      >
        REMOVE FROM LIST
      </button>
    </div>
  );
}

export default Create;
