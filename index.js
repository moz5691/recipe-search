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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`));
