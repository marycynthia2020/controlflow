// Write a program that checks if a number is even or odd.

function evenNumberCheck(num) {
  if (typeof num !== "number") {
    console.log(`enter a valid number`);
  } else if (num % 2 === 0) {
    // alert(`${num} is an even number`);
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is  an odd number`);
  }
}

// example

evenNumberCheck("211");

evenNumberCheck(20);
