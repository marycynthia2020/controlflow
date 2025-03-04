// Write a program that transforms a numerical grade to a letter grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).

function grade(score) {
  if (score > 100 || score < 0) {
    console.log("invalid score");
  } else if (score >= 70) {
    console.log(`your score is ${score} and your grade is an A`);
  } else if (score >= 60) {
    console.log(`your score is ${score} and your grade is a B`);
  } else if (score >= 50) {
    console.log(`your score is ${score} and your grade is a C`);
  } else if (score >= 45) {
    console.log(`your score is ${score} and your grade is a D`);
  } else {
    console.log(`your score is ${score} and your grade is an F`);
  }
}

// example

grade(44);
grade(-1);
grade(122);

let score = 65;

// using switch
switch (true) {
  case score > 100 || score < 0:
    console.log("invalid score");
    break;

  case score >= 70:
    console.log(`your score is ${score} and your grade is an A`);
    break;

  case score >= 60:
    console.log(`your score is ${score} and your grade is a B`);
    break;

  case score >= 50:
    console.log(`your score is ${score} and your grade is a C`);
    break;
  case score >= 45:
    console.log(`your score is ${score} and your grade is a D`);
    break;

  default:
    console.log(`your score is ${score} and your grade is an F`);
}
// step 1
console.log(score === score >= 70);
// score === true
// step 2
console.log(70 === true);
