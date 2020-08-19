'use strict';

module.exports = (sequelize, DataTypes) => {
    const Anexo = sequelize.define('Anexo', {
        arquivo: DataTypes.STRING,
        observacoes: DataTypes.TEXT,
        correspondencia_id: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        // tableName: 'Anexo'
    });

    Anexo.associate = function (models) {
        Anexo.belongsTo(models.Correspondencia, { as: 'correspondencia', foreignKey: 'correspondencia_id' })
    };

    return Anexo;
};