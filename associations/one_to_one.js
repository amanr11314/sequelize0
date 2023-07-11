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
Student.belongsTo(Grade);

Grade.bulkCreate(grade_data, { validate: true }).then(() => {
    Student.bulkCreate(student_data, { validate: true }).then(() => {

        // Retrieve Data
        // A list of associations to eagerly load 
        // using a left join(a single association is also supported).
        Student.findAll({
            include: [{
                model: Grade
            }]
        }).then(result => {
            console.log(result)
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });

    }).catch((err) => { console.log(err); });
}).catch((err) => { console.log(err); });