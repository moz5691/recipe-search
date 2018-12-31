const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipeRoutes');
const keys = require('./config/keys');
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());

recipeRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`));
