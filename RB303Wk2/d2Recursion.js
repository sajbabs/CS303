"use strict";
//Question 1
// Sum all numbers till the given one
// eslint-disable-next-line require-jsdoc
function sumAll(number){
    let sum=0;
    if (number===0){
        return sum;
    }else
    return number+sumAll(number-1);
}

/**
 * 
 * Use Object literal to create an object named linkedlist which has the following methods:add, remove, print
 */

let linkedList = {
    add: function (number) {
      if (number == 1) {
        return { value: number };
      } else {
        return { value: number, next: this.add(number - 1) };
      }
    },
    remove: function (numb) {
      if (numb === 1) {
        return {};
      } else return { value: numb + 1, next: this.add(numb - 1) };
    },
  };