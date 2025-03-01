function positiveORNegativeNumber(num) {
  if (num === 0) {
    console.log(`${num} is neither positive nor negative`);
  } else if (num < 0) {
    console.log(`${num} is a negative number`);
  } else {
    console.log(`${num} is a positive number`);
  }
}

// example

positiveORNegativeNumber(-1);
positiveORNegativeNumber(-4);
positiveORNegativeNumber(1);
positiveORNegativeNumber(0);
