// Write a program that determines whether a given number is positive or negative.

function positiveORNegativeNumber(num) {
  if (typeof num !== "number") {
    console.log("input a valid number");
  } else if (num === 0) {
    console.log(`${num} is neither positive nor negative`);
  } else if (num < 0) {
    console.log(`${num} is a negative number`);
  } else {
    console.log(`${num} is a positive number`);
  }
}

positiveORNegativeNumber(".");
positiveORNegativeNumber("a");
positiveORNegativeNumber(1);
positiveORNegativeNumber(0);
