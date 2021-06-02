/* CONDITIONALS - Conditional statements control behavior in JavaScript and determin wheatr or not piece of code can run. Conditionals will check if an expression is true. If the expresion is true, the block of code will run


Falsy Values - considered false
1) false
2) Null
3) undefined
4) 0
5) NaN (Not a numnber)
6) " " (empty string)


Truthy values - considered true.

1) true
2) 42, -42
3) "0"
*/

let snowing = false;

if (snowing == true) {
    console.log ("It is snowing outside now")
}
if(snowing) {
    console.log ("it is still snowing")
}

if (snowing == false){
    console.log(`It stopped snowing. It's too warm`)
}
 if (snowing) {
     console.log ("It is not snowing. Bummer!")// this doesn't run becaues it is still false
 }

 /*
 IF ELSE - If the expression is false, it will run the next block of code. The else staement secifieds a block of code to be executed if the condition is false.
 */

 let puppies = 3;

 if (puppies < 1) {
     console.log("I need more puppies");}
 else {
     console.log("I have enought puppies");
 }
/*
 let myName = "Marco";

 if (myName == "Marco") {
     console.log("hellow my name is");
 } else {
     console.log("y name is not");
 } */


/*
if (myName == "Marco") {
  console.log(`Hello! My name is ${myName}.`);
} else {
  console.log(`Hello, is your name ${myName}.`);
} */

let myName = "Quinn";
let myFriendName = "Mary"

console.log(myFriendName.length)
console.log("My friend", myFriendName, "has", myFriendName.length, "letters in her name. I have", myName.length, "letters in mine" );

console.log(myName.length - myFriendName.length);

//GOLD
/*
if (myName.length > myFriendName.length) {
    console.log(`My name is longer than`, myFriendName+`'s name by`, myName.length - myFriendName.length, `letters.` );
} else if (myName.length == myFriendName.length) {
    console.log(`My name and`, myFriendName+`'s name are equal in length` );
} else {
    console.log(`My name is shorter than`, myFriendName+`'s name.`);
} */
//rewrite
if (myName.length > myFriendName.length) {
    console.log(`My name is longer than ${myFriendName}'s name by ${myName.length - myFriendName.length} letters.`);}
    else if (myName.length == myFriendName.length) {
    console.log(`My name and ${myFriendName}'s name are equal in length`);
} else {
    console.log(`My name is shorter than ${myFriendName}'s name.`);
}




