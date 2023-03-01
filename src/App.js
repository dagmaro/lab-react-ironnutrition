import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchProduct from './components/SearchProduct';
import foods from './foods.json';

function App() {
  const [actualFood, setActualFood] = useState(foods);
  const [displayFood, setDisplayFood] = useState(foods);
  const [displayForm, setDisplayForm] = useState(false);

  const addNewProduct = (newProduct) => {
    const cloneActualFood = [...actualFood];
    cloneActualFood.unshift(newProduct);
    setActualFood(cloneActualFood);
    const cloneDisplayFood = [...displayFood];
    cloneDisplayFood.unshift(newProduct);
    setDisplayFood(cloneDisplayFood);
  };

  const filterfood = (searchInput) => {
    const filteredFood = actualFood.filter((eachFood) => {
      let nameMin = eachFood.name.toLowerCase();
      let searchMin = searchInput.toLowerCase();
      if (nameMin.includes(searchMin)) {
        return true;
      } else {
        return false;
      }
    });
    setDisplayFood(filteredFood);
  };

  const deleteFood = (deleteName) => {
    const filterFood = actualFood.filter((eachFood) => {
      if (eachFood.name === deleteName) {
        return false;
      } else {
        return true;
      }
    });
    setDisplayFood(filterFood);
  };

  const popForm = () => {
    if (displayForm === true) {
      setDisplayForm(false);
    } else {
      setDisplayForm(true);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Food List</h1>
      <div className="main-container" style={{ width: '100%' }}>
        <button className="form-button" onClick={popForm}>
          {displayForm === true ? 'Hide form :(' : 'Add new foody!'}
        </button>
        <div
          className="top-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
        ></div>
        {displayForm === true ? (<AddFoodForm addNewProduct={addNewProduct} />) : null}
        <SearchProduct filterfood={filterfood} />
      </div>

      {displayFood.map((eachProduct) => {
        return (
          <div
            className="main-container"
            key={eachProduct.name}
            style={{ width: '33.33%' }}
          >
            <FoodBox food={eachProduct} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
