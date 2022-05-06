import React from 'react'
import { Menu } from './MenuNavBar'
import { SearchField } from './SearchField'

export function Homepage() {
  return (
    <div>
        <img src={require('./logo.jpeg')} />
        <Menu/>
        <SearchField />
    </div>




  )
}

