"use strict";

// eslint-disable-next-line require-jsdoc
function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];    
}

    Student.prototype.inputNewGrade = function (newGrade) {
        return this.grades.push(newGrade);
    };
  Student.prototype.averageGrades = function () {
    let gradeSum=(this.grades.reduce((num, sum) => num + sum) );
        let avg=gradeSum/ this.grades.length;
        return Math.round(avg); 
  };

  let student1 = new Student("Mike", "Henry", [90, 85, 97]);
  let student2 = new Student("John", "Cena", [92 , 99, 85]);
  let student3 = new Student("Alonzo", "Morning", [88, 90, 79]);
  let student4 = new Student("Lamar", "Odom", [90, 92, 94]);
  let student5 = new Student("Jack", "Cuban", [98, 81, 99]);

  let students = [student1, student2, student3, student4, student5];
  let averageGrade2 = [];
  averageGrade2.push(student1.averageGrades());
  averageGrade2.push(student2.averageGrades());
  averageGrade2.push(student3.averageGrades());
  averageGrade2.push(student4.averageGrades());
  averageGrade2.push(student5.averageGrades());
  console.log(students);
  console.log(averageGrade2);




  //3.
  Array.prototype.sort = function () {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (this[i] > this[j]) {
          let temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };
