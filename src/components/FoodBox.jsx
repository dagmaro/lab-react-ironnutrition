function FoodBox(props) {
    const {food, deleteFood} = props
    const deleteProduct =() => {
      deleteFood(food.name)
    }
      return (
    <div>
        <h3>{food.name}</h3>
        <img src={food.image} alt="comidita" width="150px" />
        <p>Calories: {food.calories}kcal</p>
        <p>Servings: {food.servings}</p>
        <p>
            <b>Total Calories: {food.calories * food.servings}kcal</b>
        </p>

        <button onClick={deleteProduct}>Delete</button>
        
    </div>
  )
}

export default FoodBox