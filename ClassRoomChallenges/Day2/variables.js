var myName = "Rob";
var person1 = 'Josh';
var person2 = `Brenda`
let animal = "tiger"
const weather = "cloudy"
console.log("Weather", weather);

//Const can not be changed
//Let is replacing Var
// Scoping will be the discussion to highlight the benifits of using let
console.log("My Name is" , myName);


myName = "Steve"

console.log("My name is now" , myName , person2);

let phrase = "Good Moring";

console.log(phrase, myName); // this works
console.log(phrase+ myName); // this works
console.log(phrase +" " + myName); // this works

console.log(`${phrase} ${myName}, how are you?`);// backticks dollar sign curly boys -- is favored by instructor


let example = "ThE FoX JumpED oveR the TurTle";
console.log(example.toLowerCase());

let name1 = "Marco";
let name2 = "marco";

let match = name1.toLowerCase() === name2.toLowerCase();

console.log ("do the names match", match)



console.log("does example have this work initn:", example.includes("FOX"));
console.log("does example have this work initn:", example.toLowerCase().includes("FoX")); // NOT WORKING
console.log("does example have this work initn:", example.length()); ///NOT WORKING


//camelCasing
//PascalCase
//Snake_Case



