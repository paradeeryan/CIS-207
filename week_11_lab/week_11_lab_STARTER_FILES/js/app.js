/*
    FILE    app.js
    DATE    2022-10-28
    AUTHOR  Bob Trapp
    DESCRIPTION
        Used to demonstrate the meter form element in the Week 11 Lab
*/

"use strict";

// GLOBAL VARIABLES
var meterValue = 0;
var meterIncrement = 5;
var meterIncrementInterval = 100;
var meterTimer;

/**
 * Demonstrate the meter tag when the user clicks the Demo the Meter button.
 * @param {event} evt An event object for the click event
 */
function doMeterDemo(evt) {
  evt.preventDefault();
  meterValue = 0;
  meterTimer = setInterval(incrementMeter, meterIncrementInterval);
}

function incrementMeter() {
  let meter = document.getElementById("progressMeter");
  meter.value = meterValue;
  if (meterValue >= 100) {
    clearInterval(meterTimer);
  }
  meterValue = meterValue + meterIncrement;
}

/**
 * Stop the button from attempting to submit the form, and then output
 * something to the console to demonstrate the button tag.
 * @param {event} evt An event object for the click event
 */
function demoButton(evt) {
  evt.preventDefault();
  console.log(`Clicked the button element`);
}

/**
 * Stop the button from attempting to submit the form, and then output
 * something to the console to demonstrate the input type=button tag.
 * @param {event} evt An event object for the click event
 */
function demoInputButton(evt) {
  evt.preventDefault();
  console.log(`Clicked the input button element`);
}
