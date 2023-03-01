import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchProduct from './components/SearchProduct';
import foods from './foods.json';

function App() {
  const [actualFood, setActualFood] = useState(foods)
  const [displayFood, setDisplayFood] = useState(foods);
  const [displayForm, setDisplayForm] = useState(false);
  
  const addNewProduct = (newProduct) => {
    const cloneActualFood = [...actualFood]
    cloneActualFood.unshift(newProduct)
    setActualFood(cloneActualFood)
    const cloneDisplayFood = [...displayFood];
    cloneDisplayFood.unshift(newProduct);
    setDisplayFood(cloneDisplayFood);
    
  }

  const filterfood = (searchInput) => {
    const filteredFood = actualFood.filter((eachFood) => {
      let nameMin = eachFood.name.toLowerCase()
      let searchMin = searchInput.toLowerCase()
      if (nameMin.includes(searchMin)) {
        return true
      } else {
        return false
      }
    }) 
    setDisplayFood(filteredFood)
  }

  const deleteFood = (deleteName) => {
    const filterFood = actualFood.filter((eachFood) => {
      if (eachFood.name === deleteName){
        return false;
      } else {
        return true
      }
    })
    setDisplayFood(filterFood)
  }

  const popForm = () => {
    if(displayForm === true) {
      setDisplayForm(false)
    } else {
      setDisplayForm(true)
    }
  }
 

    return (
    <div className="App">
      <h3>Food List</h3>
      <button onClick={popForm}>{displayForm === true ? "Hide form :(" : "Add new foody!"}</button>
      {displayForm === true ? <AddFoodForm addNewProduct={addNewProduct}/> : null}
      
      <SearchProduct filterfood={filterfood}/>
      {displayFood.map((eachProduct) => {
        return (
            <FoodBox food={eachProduct} key={eachProduct.name} deleteFood={deleteFood}/>
          
        );
      })}
    </div>
  );
}

export default App;
