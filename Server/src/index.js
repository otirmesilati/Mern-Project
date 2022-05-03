const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
 

 
// create application/json parser
var jsonParser = bodyParser.json()
app.get('/', (req, res) => {
  res.send('<h1>Welcome to team 8s web page!</h1>');
});

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

app.listen(port, () => {
  console.log('up goes the server');
});
