// models/Article.js

import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: String,
  image: String,
  author: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

module.exports =
  mongoose.models.Article || mongoose.model('Article', ArticleSchema);
