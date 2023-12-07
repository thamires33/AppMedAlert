'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  receita.init({
    data: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    fk_medico: DataTypes.INTEGER,
    fk_paciente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'receita',
  });
  return receita;
};