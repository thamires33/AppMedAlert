'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      metodo_pagamento: {
        type: Sequelize.STRING
      },
      fk_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id'},
        onDelete: 'CASCADE'
      },
      fk_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pacientes', key: 'id'},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};