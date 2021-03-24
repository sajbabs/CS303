/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    let count=0;
    let arr=[];
    for (let any in obj){
        count+=1;
        arr.push(obj[any]);
    }

    if (obj===undefined) return console.log("no Object passed");
    else if (obj===null) return console.log("null arguement");
    else if (count===0) return console.log("object has no properties");
    else if (count>0)return console.log(count, arr.sort());

}
