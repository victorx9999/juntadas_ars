'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('artigos', 'orgao',
            {
                allowNull: true,
                type: Sequelize.STRING
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'artigos',
            'orgao'
        );
    }
};
