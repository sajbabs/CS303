/* eslint-disable require-jsdoc */
"use strict";

/**
 * 
 */
class Student {
    constructor(firstName, lastName, grades) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.grades = grades;
    }
    inputNewGrade(newGrade) {
      this.grades.push(newGrade);
    }
    computeAverageGrade() {
      let gradeSum=(this.grades.reduce((num, sum) => num + sum) );
      let avg=gradeSum/ this.grades.length;
      return Math.round(avg);
    }
  }
  
  let mike = new Student("Mike", "Henry", [90, 85, 97]);
  let john = new Student("John", "Cena", [92 , 99, 85]);
  let alonzo = new Student("Alonzo", "Morning", [88, 90, 79]);
  let lamar = new Student("Lamar", "Odom", [90, 92, 94]);
  let jack = new Student("Jack", "Cuban", [98, 81, 99]);
  
  console.log(mike.computeAverageGrade());
  console.log(john.computeAverageGrade());
  console.log(alonzo.computeAverageGrade());
  console.log(lamar.computeAverageGrade());
  console.log(jack.computeAverageGrade());


  //num1
  //