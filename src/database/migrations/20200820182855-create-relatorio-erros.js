'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('relatorio_erros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      descriscao: {
        allowNull: false,
        type: Sequelize.STRING
      },

      foto: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },



      correspodencia_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'artigo',
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
    return queryInterface.dropTable('relatorio_erros');
  }
};