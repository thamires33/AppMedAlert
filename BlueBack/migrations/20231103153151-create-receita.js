'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('receita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      diagnostico: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.STRING
      },
      fk_medico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'medicos', key: 'id'},
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
    await queryInterface.dropTable('receita');
  }
};