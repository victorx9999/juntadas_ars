'use strict';

module.exports = (sequelize, DataTypes) => {

    const Artigo = sequelize.define('Artigo', {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        arquivo: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        orgao: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        tableName: 'artigos'
    });

    Artigo.associate = function(models) {
        Artigo.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuario_id' })
    };
    
    return Artigo;
};