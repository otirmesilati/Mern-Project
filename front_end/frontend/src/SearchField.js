
import React from 'react'
import './SearchField.css' 
import axios from 'axios'
import { useState } from 'react'
export function SearchField() {
  const [test, settest ]= useState('')

  function passToBackend () {
    console.log('Sending request to backend')
    console.log(test)

    axios.post('http://localhost:5001/search', {
      test_data: test,
    }).then(res => {
      console.log('Received response from back - response below');
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div class="search-container">
      <input value={test} onChange={event => {settest(event.target.value)}} type="text" placeholder='search by string'></input>
      <button onClick={() => {passToBackend()}}>Press here</button>
    
    </div>

  )
}

