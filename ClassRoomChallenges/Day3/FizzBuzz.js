//

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/
/* A SOLUTION
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is FIZZ Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} is FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i} is BUZZ`);
  } else {
    console.log(i);
  }
}
*/

/* this is a Solution

for (let fb = 1; fb <= 100; fb++) {
  if (fb % 3 === 0 && fb % 5 === 0) {
    console.log(`${fb} is FIZZ Buzz`);
  } else if (fb % 3 === 0) {
    console.log(`${fb} is FIZZ`);
  } else if (fb % 5 === 0) {
    console.log(`${fb} is BUZZ!`);
  } else {
    console.log(fb);
  }
} */

let fb = 15;
/*// use a modulus operator is an arithmetic operator that returns the division remander.
if (fb % 3 === 0 && fb % 5 === 0) {
  // && is the logical operator that allows us to compare the two or more expressions
  console.log(`${fb} is FIZZ Buzz`);
} else if (fb % 3 === 0) {
  console.log(`${fb} is FIZZ`);
} else if (fb % 5 === 0) {
  console.log(`${fb} is BUZZ!`);
} else {
  console.log(fb);
}
*/
//SWITCH SOLUTION

switch (true) {
  case fb % 3 === 0 && fb % 5 === 0:
    console.log(`${fb} is FIZZ Buzz`);
    break;
  case fb % 3 === 0:
    console.log(`${fb} is FIZZ`);
    break;
  case fb % 5 === 0:
    console.log(`${fb} is BUZZ!`);
    break;
  default:
    console.log(fb);
} /* */

/* working Ternary */
fb % 3 === 0 && fb % 5 === 0
  ? console.log("is FIZZ Buzz")
  : fb % 3 === 0
  ? console.log("is FIZZ")
  : fb % 5 === 0
  ? console.log("is BUZZ!")
  : console.log(fb);

//B
/*
greeting.length > 10
  ? console.log("that is a long greeting!")
  : greeting.length == 10
  ? console.log("your greeting is exactly 10 characters")
  : console.log("what a normal greeting");
*/
