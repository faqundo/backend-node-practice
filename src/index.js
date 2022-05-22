// ************ Require's ************
require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const schedule = require('./routes/schedule');
const login = require('./routes/login');

// ************ express() - (don't touch) ************
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// ************ Middlewares - (don't touch) ************
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());


// Routes
app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.use('/auth', login);
app.use('/api',schedule);


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});



