// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function priceTicket(age) {
  if (age < 5) {
    console.log(`your ticket is #5`);
  } else if (age < 18) {
    console.log("your ticket is #10");
  } else if (age < 60) {
    console.log("your ticket is #20");
  } else {
    console.log("your ticket is #15");
  }
}

// example

priceTicket(19);
priceTicket(2);
priceTicket(10);
priceTicket(61);
