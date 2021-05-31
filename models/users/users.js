'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
   
    static associate(models) {
      
    }
  };
  users.init({
    userID: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userMobile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};