/**
 * Imagine a situation where students are enrolled in courses. 
 * One student can enroll in many courses and 
 * one course can have many students. 
 * This is a many-to-many relationship. 
 */

const { sequelize } = require('../config/db_config')
const { Student } = require('../models/student.model')
const { Course } = require('../models/course.model')
const { StudentCourse } = require('../models/StudentCourse.model')

const course_data = [
    { course_name: "Science" },
    { course_name: "Maths" },
    { course_name: "History" }
]

const student_data = [
    { name: "John Baker", courseId: 2 },
    { name: "Max Butler", courseId: 1 },
    { name: "Ryan Fisher", courseId: 3 },
    { name: "Robert Gray", courseId: 2 },
    { name: "Sam Lewis", courseId: 1 }
]

const student_course_data = [
    { studentId: 1, courseId: 1 },
    { studentId: 2, courseId: 1 },
    { studentId: 2, courseId: 3 },
    { studentId: 3, courseId: 2 },
    { studentId: 1, courseId: 2 },
]
// Create a m:n association between Student and Course
Course.belongsToMany(Student, { through: 'StudentCourse' })
Student.belongsToMany(Course, { through: 'StudentCourse' })

sequelize.sync({ force: true }).then(() => {
    Course.bulkCreate(course_data, { validate: true }).then(() => {
        Student.bulkCreate(student_data, { validate: true }).then(() => {
            StudentCourse.bulkCreate(student_course_data, { validate: true }).then(() => {

                Course.findAll({
                    where: {
                        id: 1
                    },
                    include: {
                        model: Student,
                    },
                }).then(result => {
                    console.dir(result, { depth: 5 });
                }).catch((error) => {
                    console.error('Failed to retrieve data : ', error);
                });

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
    console.error('Unable to create table : ', error);
});