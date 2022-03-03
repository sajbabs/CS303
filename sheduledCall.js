/* eslint-disable id-length */
/* eslint-disable valid-jsdoc */
"use strict";

//Question 1: Write a function printNumbers(from, to) that outputs a number every second, starting from
//from and ending with to.

/**
 * 
 * @param {Number} from number to start from 
 * @param {Number} to number to end
 */
function printNumbers(from,to){
    let pTime=from;

    setTimeout(function go()) {
        alert (pTime);
        if (pTime < to){
            setTimeout(go,1000);
        }
        pTime++;

    },1000);
}


// Question2 :
/*
All setTimeout function after the other codes executes in the call MediaStreamTrack.apply
therefore the setTimeout executes after the loop.  */
