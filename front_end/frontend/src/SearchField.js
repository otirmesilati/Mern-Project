
import React from 'react'
import './SearchField.css' 
import axios from 'axios'
import { useState } from 'react'
export function SearchField() {
  const [searchString, setSearchString ]= useState('')

  function passVariablesToBackend () {
    console.log('Sending request to backend')
    axios.get('http://localhost:5001/search', {
      search: searchString,
    }).then(res => {
      console.log('Received response from back - response below');
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div class="search-container">
      <input type="text" onChange={event => setSearchString(event.target.value)} placeholder="Search product by name.." name="search"></input>
      <button type="submit" onClick={passVariablesToBackend}>Search</button>
    
    </div>

  )
}

