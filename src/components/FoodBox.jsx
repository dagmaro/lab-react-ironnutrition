function FoodBox(props) {
  const { food, deleteFood } = props;
  const deleteProduct = () => {
    deleteFood(food.name);
  };
  return (
    <div className="food-container">
      <img src={food.image} alt="comidita" width="150px" height="100px" />
      <div className="in-order-container">
        <h3>{food.name}</h3>
        <p>Calories: {food.calories}kcal</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}kcal</b>
        </p>

        <button className="delete-button" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default FoodBox;
