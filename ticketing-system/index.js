const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', ticketRoutes);

mongoose.connect('mongodb://localhost:27017/ticketing-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.error('Error connecting to the database:', err));
