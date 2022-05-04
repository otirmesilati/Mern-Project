
import React from 'react'
import './SearchField.css' 

export function SearchField() {
  return (
    <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search product by name.." name="search"></input>
      <button type="submit">Search</button>
    </form>
    </div>
  )
}