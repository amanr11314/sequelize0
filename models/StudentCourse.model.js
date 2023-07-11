const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db_config')

const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

exports.StudentCourse = StudentCourse