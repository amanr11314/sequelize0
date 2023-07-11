const { sequelize } = require('../config/db_config')
const { Book } = require('../models/book.model')


sequelize.sync().then(() => {
    console.log('Book table created succssfully');

    // insert new record
    // Book.create({
    //     title: "Clean Code",
    //     author: "Robert Cecil Martin",
    //     release_date: "2021-12-14",
    //     subject: 3
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    // Fetch All Records
    // Book.findAll().then(res => {
    //     console.log(res);
    // }).catch((err) => console.error('Failed to retrive data: ', err))

    // Where clause fetching
    // Book.findOne({
    //     where: {
    //         id: "1"
    //     }
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to retrieve data : ', error);
    // });

    // Delete Clause
    Book.destroy({
        where: {
            id: 3
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});