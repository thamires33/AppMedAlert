'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedido.init({
    status: DataTypes.STRING,
    total: DataTypes.STRING,
    metodo_pagamento: DataTypes.STRING,
    fk_endereco: DataTypes.INTEGER,
    fk_paciente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};