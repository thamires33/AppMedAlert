'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class farmacia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  farmacia.init({
    nome: DataTypes.STRING,
    contato: DataTypes.STRING,
    fk_endereco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'farmacia',
  });
  return farmacia;
};