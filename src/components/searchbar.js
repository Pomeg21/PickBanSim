import React from 'react'
import './searchbar.css';
import { championList } from '../Data';
import { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState("")
  
  const fetchData = (value) => {
    fetch("/Data.js").then((response) => response.json()).then(json =>{
      console.log(json);
    });
  }

  const handleChange = (value)=> {
    setInput(value)
    fetchData(value)
  }

  return (
<div>

    <div className = 'input-wrapper'>
        <input placeholder='Search...' value={input} onChange={(e) => handleChange(e.target.value)} /> 
    </div>

    <div classname = 'input-result'>

      {championList.map((item) => (

      <button>{item.portrait}</button>

    ))}
    </div>

</div>
  )
}

export default SearchBar
