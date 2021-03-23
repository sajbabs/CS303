/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(num,exp) {
	return (Math.pow(num, exp));
}

function add2(num1, num2) {
	return num1 + num2;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	let sum=0;
	let avg;
	let grade;
	let length= grades.length;
	for (let i=0; i<length; i++){
		sum+=grades[i];
	}
	avg=sum/length;

	switch (avg) {
		case (avg<=100||avg>=90):
			grade= "A";			
			break;
		case (avg<=89||avg>=80):
			grade="B";
			break;
		case (avg<=79||avg>=70):
			grade="C";
			break;
		case (avg<=69||avg>=60):
			grade="D";
			break;
		default:
			grade= "NC";
			break;
	}

	return grade;
}

