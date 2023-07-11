const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db_config')

const Course = sequelize.define("courses", {
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

exports.Course = Course