const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config')

const Article = sequelize.define('Article', {
  // Model attributes are defined here
  title: DataTypes.STRING,
  image: DataTypes.STRING,
  author: DataTypes.STRING,
  description: DataTypes.TEXT,
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Article === sequelize.models.Article); // true