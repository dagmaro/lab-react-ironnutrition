import React, { useState } from 'react'

function SearchProduct(props) {
    const [searchInput, setSearchInput] = useState("")
    const handleSearch = (event) => {
        const foodNames = event.target.value
        const firstLetterToUpperCase = foodNames.charAt(0).toUpperCase() + foodNames.slice(1)
        setSearchInput(firstLetterToUpperCase)
        props.filterfood(firstLetterToUpperCase)
    }
  return (
    <div>
        <h3>Search some product</h3>
        <label htmlFor="search">Look for some tatsy food! </label>
        <input type="text" placeholder="ñam ñam" name="search" value={searchInput} onChange={handleSearch} />
    </div>
  )
}

export default SearchProduct