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
