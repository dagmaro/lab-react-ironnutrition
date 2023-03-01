function FoodBox(props) {
    const {food} = props
  return (
    <div>
        <h3>{food.name}</h3>
        <img src={food.image} alt="comidita" width="150px" />
        <p>Calories: {food.calories}kcal</p>
        <p>Servings: {food.servings}</p>
        <p>
            <b>Total Calories: {food.calories * food.servings}kcal</b>
        </p>

        <button>Delete</button>
        
    </div>
  )
}

export default FoodBox