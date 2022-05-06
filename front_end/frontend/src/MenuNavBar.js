import React from 'react'
import './MenuNavBar.css'

export function Menu() {
  return (

  <div class="topnav">
  <a class="active" href="/">Home</a>
  <a href="/laundrymachines">Laundry Machines</a>
  <a href="/dryers">Dryers</a>
  <a href="/refrigerators">Refrigerators</a>
  <a href="/dish-washers">Dish Washers</a>
  <a href="/televisions">Televisions</a>
  <a href="/refrigerators">Ovens</a>
  <a href="/stoves">Stoves</a>
  <a href="/airconditioners">Air Conditioners</a>
  <div class='sidebar'> 
     <a href="/signin">Sign in</a>
  <a href="/signup">Sign up</a>
  <a href="/sishlist">Wish list</a>
  <a href="/cart">cart</a></div>


  </div>

  )
}

