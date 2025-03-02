// Write a program to determine the greater of two numbers (between two numbers). Use both the if/else statement and tenary operator.

// using if/else statement

function greaterNumber(num1, num2) {
  if (num1 === num2) {
    console.log(`${num1} and ${num2} are equal`);
  } else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

// using ternary operator
function greaterNumberT(num1, num2) {
  num1 === num2
    ? console.log(`${num1} and ${num2} are equal`)
    : num1 > num2
    ? console.log(`${num1} is greater than ${num2}`)
    : console.log(`${num2} is greater than ${num1}`);
}

greaterNumber(1502, 1502);
greaterNumberT(2000, 23);
