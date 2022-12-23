const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index')

class users extends Model { }
users.init({
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize,
  modelName: 'users',
});

module.exports = users