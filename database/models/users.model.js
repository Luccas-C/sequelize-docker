const { DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('users' , {
        nome:{
            allowNull: false,
            type: DataTypes.STRING
        },
        sobre_nome:{
            allowNull: false,
            type: DataTypes.STRING
        },
        idade:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
    });
}