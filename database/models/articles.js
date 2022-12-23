const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index')

class articles extends Model { }
articles.init({
  title: DataTypes.STRING,
  image: DataTypes.STRING,
  author: DataTypes.STRING,
  tag: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'articles',
});

module.exports = articles