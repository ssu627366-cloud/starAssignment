// assignment1
console.log("Assignment 1");

for (let i = 1; i <= 3; i++) {
  let char = " *";
  for (let col = 1; col < 5; col++) {
    char += "*";
  }
  console.log(char);
}
// assignment2
console.log(" Assignment 2 ");
let char = "";
for (let j = 1; j <= 5; j++) {
  char += "*";
  console.log(char);
}

// assignment3
console.log("Assignment 3");
for (let k = 5; k >= 1; k--) {
  let cha = "";
  for (let x = 1; x <= k; x++) {
    cha = cha + "*";
  }
  console.log(cha);
}
// assignment4
console.log("assignment4");

for (let i = 1; i <= 3; i++) {
  let char = "*";

  if (i % 2 == 0) {
    char = " ";
    for (let col = 1; col < 5; col++) {
      char += "*";
    }
  } else {
    for (let col = 1; col < 5; col++) {
      char += "*";
    }
  }
  console.log(char);
}
// assignment5
console.log("Assignment5");
let day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesdaay");
    break;
  case 4:
    console.log("Wesday");
    break;
  case 5:
    console.log("Thusday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Sataday");
    break;
  default:
    console.log("Error");
    break;
}

console.log("control flow done");
