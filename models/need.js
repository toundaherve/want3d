'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Need extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Need.init({
    itemName: DataTypes.STRING,
    itemCategory: DataTypes.STRING,
    itemDescription: DataTypes.TEXT,
    buyerBudget: DataTypes.DOUBLE,
    buyerCurrency: DataTypes.STRING,
    buyerName: DataTypes.STRING,
    buyerCountry: DataTypes.STRING,
    buyerCity: DataTypes.STRING,
    buyerEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Need',
  });
  return Need;
};