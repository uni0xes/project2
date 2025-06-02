const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('Table', {
        tableText1: {
            type: DataTypes.STRING,
        },
        tableText2: {
            type: DataTypes.STRING,
        }
    },{
        tableName: 'TableName'
    })
}
