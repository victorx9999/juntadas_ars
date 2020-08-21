'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('artigos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            titulo: {
                allowNull: false,
                type: Sequelize.STRING
            },

            descricao: {
                allowNull: false,
                type: Sequelize.STRING(5000)
            },

            arquivo: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },

            ativo: {
                allowNull: false,
                defaultValue: true,
                type: Sequelize.BOOLEAN
            },

            usuario_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'usuarios',
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
        return queryInterface.dropTable('artigos');
    }
};