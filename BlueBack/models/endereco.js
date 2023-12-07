'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  endereco.init({
    cep: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'endereco',
  });
  return endereco;
};