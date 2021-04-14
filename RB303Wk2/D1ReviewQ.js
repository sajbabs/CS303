
"use strict";
//Number1
// For a given array, sum all the elements which are greater than 20.
// [1, 50, 40, 3, 10] => Print result: 90

/**
 * 
 * @param {Array} array of  numbers 
 * @returns {Number} number
 */
function sumGreater(array){
    let sumarr=array.filter(num=> num>20);
    return  sumarr.reduce((num,sum)=>num+sum);
}

console.log(sumGreater([1, 50, 40, 3, 10]));

//Number 2
// For a given String array, return a new array which contains all string, length is greater than and equals to 5, and contains letter ‘a’.
/**
 * 
 * @param {Array} array of strings
 * @returns {Array} strings
 */
function stringLength(array){
    let array1=array.filter(str=> str.length>=5 && str.includes("a"));
    return array1;
}

console.log(stringLength(["age","gap","lures","apology","Truth","life","tranquility"]));

//Number 3
//Create a constructor function Employee with properties: firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
//•Create an array with a few Employee objects with different firstName, lastName, birthdate.
//•Find if there is any employee which age is greater than 20
//•Return a String array which contains the full name of employee and born after 2000
/**
 * 
 * @param {String} firstName of employee 
 * @param {String} lastName of Employee
 * @param {string} birthdate  of Employee
 */

// eslint-disable-next-line require-jsdoc
function Employee(firstName,lastName,birthdate){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthdate= birthdate;
    this.currentYear=new Date().getFullYear();
    this.getFullName=function(){
        return this.firstName + " "+ this.lastName;
    };
    this.getAge=function(){
        return this.currentYear- this.birthdate;
    };
}

let employee1 = new Employee("Zuke", "Andre", 2001);
let employee2 = new Employee("Raymond", "Johnsson", 2000);
let employee3 = new Employee("Lukaku", "Ferry", 1988);
let employee4 = new Employee("Chris", "Luck", 2004);
let employee5 = new Employee("Jomma", "Frank", 2001);
let employeeArr = [employee1, employee2, employee3,employee4,employee5];

//•Find if there is any employee which age is greater than 20
// eslint-disable-next-line require-jsdoc
function greaterThan20(employeeArray){
    let empArray= employeeArray.filter(emp=>emp.getAge()>20);
    if (empArray.length>0) return true;
}
console.log(greaterThan20(employeeArr));

// eslint-disable-next-line require-jsdoc
function after2000(array){
    let newArr=[];
    let bornAfter=array.filter(emp=> emp.birthdate>2000);
    if (bornAfter){
        for(let any of bornAfter) newArr.push(any.getFullName());
    }
    return newArr;
}
console.log(after2000(employeeArr));