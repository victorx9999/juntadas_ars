'use strict';

module.exports = (sequelize, DataTypes) => {
    const Relatorio_erros = sequelize.define('Relatorio_erros', {
        descricao: DataTypes.STRING,
        foto: DataTypes.STRING,
        artigo_id: DataTypes.INTEGER,

    }, {
        freezeTableName: true,
        tableName: 'relatorio_erros'
    });

    Relatorio_erros.associate = function (models) {
        Relatorio_erros.belongsTo(models.Artigo, { as: 'artigo', foreignKey: 'artigo_id' })

    };

    return Relatorio_erros;
};