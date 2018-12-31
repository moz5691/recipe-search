const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
  id: Number,
  img: String,
  name: String,
  ingredients: [String],
  instructions: [String]
});

mongoose.model('recipes', recipeSchema);
