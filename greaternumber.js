// using if/else statement

function greaterNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

// using ternary operator
function greaterNumberT(num1, num2) {
  num1 > num2
    ? `${num1} is greater than ${num2}`
    : `${num2} is greater than ${num1}`;
}

greaterNumber(150, 8000);
