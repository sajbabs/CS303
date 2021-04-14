"use strict";

let student= {
    fName:"",
    lname:"",
    grades:[],
    inputNewGrade:function (newGrade){
        this.grades.push(newGrade);
    },
    computeGradeAverage: function () {
        let gradeSum=(this.grades.reduce((num, sum) => num + sum) );
        let avg=gradeSum/ this.grades.length;
        return Math.round(avg); 
    }
};

let student1 = Object.create(student);
let student2 = Object.create(student);
let student3 = Object.create(student);
let student4 = Object.create(student);
let student5 = Object.create(student);
let student6 = Object.create(student);
student1.firstName = "Bolar";
student2.firstName = "Riola";
student3.firstName = "Mayola";
student4.firstName = "Zolean";
student5.firstName = "Majora";
student6.firstName = "Boolean";
student1.grades = [88, 98, 90];
student2.grades = [89, 87, 77];
student3.grades = [97, 99, 80];
student4.grades = [85, 75, 91];
student5.grades = [95, 88, 93];
student6.grades = [96, 95, 88];

student1.inputNewGrade(86);
student2.inputNewGrade(78);
student3.inputNewGrade(65);
student4.inputNewGrade(75);
student5.inputNewGrade(95);
student6.inputNewGrades(88);

let stu1 = student1.computeGradeAverage();
let stu2 = student2.computeGradeAverage();
let stu3 = student3.computeGradeAverage();
let stu4 = student4.computeGradeAverage();
let stu5 = student5.computeGradeAverage();
let stu6 = student6.computeGradeAverage();

let students = [student1, student2, student3, student4, student5, student6];
let averageGrade = [stu1, stu2, stu3, stu4, stu5, stu6];
console.log(students);
console.log(averageGrade);  