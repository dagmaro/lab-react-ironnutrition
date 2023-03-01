import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchProduct from './components/SearchProduct';
import foods from './foods.json';

function App() {
  const [actualFood, setActualFood] = useState(foods)
  const [displayFood, setDisplayFood] = useState(foods);
  const addNewProduct = (newProduct) => {
    const cloneActualFood = [...actualFood]
    cloneActualFood.unshift(newProduct)
    setActualFood(cloneActualFood)
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
    return (
    <div className="App">
      <h3>Food List</h3>

      <AddFoodForm addNewProduct={addNewProduct}/>
      <SearchProduct filterfood={filterfood}/>
      {displayFood.map((eachProduct) => {
        return (
            <FoodBox food={eachProduct} key={eachProduct.name} />
        );
      })}
    </div>
  );
}

export default App;
