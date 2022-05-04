import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import {Menu} from './MenuNavBar'
import {SearchField} from './SearchField'

function App() {
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
    <div>
        <Menu />
        <SearchField />
    </div>


  );
}

export default App;
