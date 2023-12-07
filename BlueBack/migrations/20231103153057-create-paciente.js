'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      dataNascimento: {
        type: Sequelize.STRING
      },
      contado: {
        type: Sequelize.STRING
      },
      fk_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id' },
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
    await queryInterface.dropTable('pacientes');
  }
};