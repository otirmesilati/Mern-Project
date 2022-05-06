import React, {useState} from 'react'
import { Menu } from './MenuNavBar'
import { SearchField } from './SearchField'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LaundryMachines } from './laundryMachines'
import { Promotions } from './Promotions';
import { Dryers } from './dryers';

export function Homepage() {
  const [viewPage, setViewPage] = useState('home')

  function InhouseRender () {
    if (viewPage == 'home') {
      return <Promotions />
    } 
    else if (viewPage == 'laundrymachines') {
      return <LaundryMachines />
    }
    else if (viewPage == 'dryers') {
      return <Dryers />
    }
  }
  
  return (
    <div>
        <img src={require('./logo.jpeg')} />
        <Menu viewPage={viewPage} setViewPage={setViewPage} />
        <SearchField />
        <InhouseRender />
    </div>




  )
}

