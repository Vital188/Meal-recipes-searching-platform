function Dish({ dish }) {
  return (
    <div className="miskas">
      <div
        style={{
          border: "2px solid black",
          margin: "20px",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "25px",
          }}
        >
          {dish.strMeal}
        </h1>
        <div className="insidebox">
          <img
            style={{
              width: "200px",
              height: "200px",
            }}
            src={dish.strMealThumb}
            alt={dish.strMeal + "-photo"}
          />
          <div
            className="insidebox3"
            style={{
              color: "black",
              fontSize: "16px",
              textAlign: "justify",
              lineHeight: "150%",
            }}
          >
            {dish.strInstructions}
          </div>
          <ul
            style={{
              color: "black",
              fontSize: "14px",
              lineHeight: "150%",
            }}
          >
            <b>INGRIDIENTS:</b>
            <li>{dish.strIngredient1}</li>
            <li>{dish.strIngredient2}</li>
            <li>{dish.strIngredient3}</li>
            <li>{dish.strIngredient4}</li>
            <li>{dish.strIngredient5}</li>
            <li>{dish.strIngredient6}</li>
            <li>{dish.strIngredient7}</li>
            <li>{dish.strIngredient8}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dish;
