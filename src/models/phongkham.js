'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phongkham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Phongkham.init({
    
    
    address: DataTypes.STRING,
    description : DataTypes.TEXT,
    image : DataTypes.STRING
    

   
  }, {
    sequelize,
    modelName: 'Phongkham',
  });
  return Phongkham;
};