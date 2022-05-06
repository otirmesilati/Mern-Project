import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import {Menu} from './MenuNavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from './homepage';
import { Signin } from './Signin';
import { Signup } from './Signup';
import { LaundryMachines } from './laundryMachines'

function App() {

  
  return (

<BrowserRouter>
     <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />}  />
     </Routes>
</BrowserRouter>
 
  );
}

export default App;
