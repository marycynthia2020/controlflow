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
