'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_receita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item_receita.init({
    instrucoes: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    fk_receita: DataTypes.INTEGER,
    fk_medicamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item_receita',
  });
  return item_receita;
};