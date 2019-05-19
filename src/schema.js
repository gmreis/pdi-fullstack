const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    value: { type: Number },
  }, { timestamps: true });
  
  const NewsModel = mongoose.model('News', newsSchema);
  
  module.exports = NewsModel;
