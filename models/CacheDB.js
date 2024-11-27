// models/CacheDB.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

class CacheDB extends Model {}

CacheDB.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    mapName: {
        type: DataTypes.STRING,
        allowNull: true // Adjust as necessary
    },
    currentRoomStatus: {
        type: DataTypes.STRING,
        allowNull: true // Adjust as necessary
    }
}, {
    sequelize,
    modelName: 'CacheDB',
    tableName: 'cache',
    timestamps: false // Set to true if you want to add createdAt and updatedAt fields
});

module.exports = CacheDB;
