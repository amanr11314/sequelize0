
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db_config')

// create a Book model
const Student = sequelize.define("students", {
    student_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

/**
 * model.sync(): This creates the table if it doesn’t exist already.
 * model.sync({ force: true }): This creates the table by dropping it 
 * if the same table exists already.
 */

// Add book model to database
// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

exports.Student = Student