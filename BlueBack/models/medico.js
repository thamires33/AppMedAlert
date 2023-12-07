'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medico.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    CRM: DataTypes.INTEGER,
    contato: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medico',
  });
  return medico;
};