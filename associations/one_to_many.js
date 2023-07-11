const { sequelize } = require('../config/db_config')
const { Grade } = require('../models/grade.model')
const { Student } = require('../models/student.model')

const grade_data = [{ grade: 9 }, { grade: 10 }, { grade: 11 }]

const student_data = [
    { name: "John Baker", gradeId: 2 },
    { name: "Max Butler", gradeId: 1 },
    { name: "Ryan Fisher", gradeId: 3 },
    { name: "Robert Gray", gradeId: 2 },
    { name: "Sam Lewis", gradeId: 1 }
]
// Create a 1:m association between Student and Grade
Grade.hasMany(Student);

sequelize.sync({ force: true }).then(() => {
    Grade.bulkCreate(grade_data, { validate: true }).then(() => {
        Student.bulkCreate(student_data, { validate: true }).then(() => {
            Grade.findAll({
                where: {
                    grade: 9
                },
                include: [{
                    model: Student
                }]
            }).then(result => {
                console.dir(result, { depth: 5 });
            }).catch((error) => {
                console.error('Failed to retrieve data : ', error);
            });
        }).catch((err) => { console.log(err); });
    }).catch((err) => { console.log(err); });
}).catch((error) => {
    console.error('Unable to create table : ', error);
});