'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paciente.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    dataNascimento: DataTypes.STRING,
    contato: DataTypes.STRING,
    fk_endereco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'paciente',
  });
  return paciente;
};