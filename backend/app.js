const express = require('express');
const bodyParser = require('body-parser');
const Thing = require('./models/thing');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');


const app = express();
const mongoose = require('mongoose');
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


mongoose.connect('mongodb+srv://adminMazz:Mazz4238Mazz@mongodbtest-ghmq5.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200', 'always');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

// app.use('/api/stuff', stuffRoutes);


module.exports = app;
