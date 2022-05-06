const express = require('express');
const port = process.env.PORT || 5001;
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
const {searchLaundryMachines, searchTelevisions} = require('./mongoDB')



 
// create application/json parser
var jsonParser = bodyParser.json()

app.post('/login', jsonParser, (req, res) => {
 console.log('Receiving data from frontend')
  console.log(req.body);
  var email = req.body.email_data
  if(email.includes('alex') == true) {
    res.send('FOUND').sendStatus(200)
  } else {
    res.send('NOT FOUND').sendStatus(404)
  }
})


app.get('/getlaundrymachines', (req, res) => {
  searchLaundryMachines({}).then((laundryMachines) => {
    res.send(laundryMachines)
  }).catch((machinesError) => {
    console.log(machinesError)
  })
 })

app.listen(port, () => {
  console.log('up goes the server');
});




