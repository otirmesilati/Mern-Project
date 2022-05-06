import React from 'react'
import './Signin.css'
import {useState} from 'react'
import Axios from 'axios'
export function Signin() {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
  
    function passVariablesToBackend () {
      console.log('Sending request to backend')
      Axios.post('http://localhost:5000/login', {
        email_data: Email,
        password_data: Password
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        var element = document.getElementById('test')
        element.innerText = res.data
        if(res.data == 'FOUND') {
          element.style.background = 'green'
        } else {
          element.style.background = 'red'
        }
  
      }).catch(err => {
        console.log(err);
      })
    }
    return (
        <div className="App">
      <input value={Email} onChange={event => {setEmaildData(event.target.value)}} type="email" placeholder='Email'></input>
      <input value={Password} onChange={event => {setPasswordData(event.target.value)}} type="password" placeholder='Password'></input>
      <button onClick={() => {passVariablesToBackend()}}>Press here</button>
      <div id='test' >
        
      </div>
    </div>

  );
}

