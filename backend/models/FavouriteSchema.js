// backend/models/Favorite.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Type: String,
  Poster: String,
});

module.exports = mongoose.model('Favor', favoriteSchema);


