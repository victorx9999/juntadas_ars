'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Anexo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arquivo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      observacoes: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      correspondencia_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Correspondencia',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Anexo');
  }
};