// Write a program that calculates a discount based on the purchase amount. Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

function discount(price) {
  if (typeof price !== "number") {
    console.log("enter a valid price");
  } else if (price >= 100) {
    console.log(`you have a discount of #20`);
  } else if (price >= 50) {
    console.log(`you have a discount of #10`);
  } else {
    console.log(`you have 0 discount, sorry oo`);
  }
}

// example
discount("");
discount(0);
discount(30);
discount(45);
discount(51);
discount(102);
