import { useState } from "react"

function AddFoodForm(props) {
    const [foodNameInput, setNameFoodInput] = useState("")
    const [foodImageInput, setFoodImageInput] = useState("");
    const [foodCaloriesInput, setFoodCaloriesInput] = useState(0)
    const [foodServingsInput, setFoodServingsInput] = useState(0);

    const handleNameFood = (event) => {
        const realFoodNameInput = event.target.value
        const firstLetterToUpperCase = realFoodNameInput.charAt(0).toUpperCase() + realFoodNameInput.slice(1)
        // console.log(firstLetterToUpperCase)
        setNameFoodInput(firstLetterToUpperCase)
    }
    const handleCaloriesFood = (event) => {
        if (event.target.value < 0){
            return;
        }
        setFoodCaloriesInput(event.target.value)
    }
    const handleServingsFood = (event) => {
        if (event.target.value < 0){
            return;
        }
        setFoodServingsInput(event.target.value)
    }
    const submitNewFood = (event) =>{
        event.preventDefault()
        const newProduct = {
            name: foodNameInput,
            image: foodImageInput,
            calories: foodCaloriesInput,
            servings: foodServingsInput
        }
        props.addNewProduct(newProduct)
    }
  return (
    <div>
        <form onSubmit={submitNewFood}>
            <label htmlFor="name">Name </label>
            <input type="text" value={foodNameInput} onChange={handleNameFood} />
            <br />
            <label htmlFor="image">Image </label>
            <input type="text" placeholder="https://i.imgur.com/eTmWoAN.png" value={foodImageInput} onChange={(event) => {
                setFoodImageInput(event.target.value)
            }}/>
            <br />
            <label htmlFor="calories">Calories </label>
            <input type="number" value={foodCaloriesInput} onChange={handleCaloriesFood} />
            <br />
            <label htmlFor="servings">Servings </label>
            <input type="number" value={foodServingsInput} onChange={handleServingsFood}/>
            <br />
            <button>Create</button>

        </form>
    </div>
  )
}

export default AddFoodForm