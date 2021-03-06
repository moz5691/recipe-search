const keys = require('../config/keys');
const mongoose = require('mongoose');
require('../models/Recipe');
const Recipe = mongoose.model('recipes');

module.exports = app => {
  app.get('/api/recipe', async (req, res) => {
    const result = await Recipe.find({});
    res.send(result);
  });
  app.get('/api/recipe/:id', async (req, res) => {
    const result = await Recipe.findOne({ _id: req.params.id });
    res.send(result);
  });
};
