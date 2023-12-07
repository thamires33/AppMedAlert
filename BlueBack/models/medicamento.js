'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicamento.init({
    nome: DataTypes.STRING,
    dosagem: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    tarja: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medicamento',
  });
  return medicamento;
};