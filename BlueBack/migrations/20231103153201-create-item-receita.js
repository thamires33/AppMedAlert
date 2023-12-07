'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_receita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrucoes: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      fk_receita: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'receita', key: 'id'},
        onDelete: 'CASCADE'
      },
      fk_medicamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'medicamentos', key: 'id'},
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
    await queryInterface.dropTable('item_receita');
  }
};