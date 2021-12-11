/* let myInt = 5;
let myFloat = 6.667;
myInt;
myFloat;
 */

/* typeof myInt;
typeof myFloat;
 */

/* let myNumber = '74';
myNumber + 3;
Number(myNumber) + 3; //turns string to number
 */

/* let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year < 2015) {
	alert ("Too early!");
}   else if (year > 2015) {
	alert ("Too late!");
}   else {
	alert ("Exactly");
} */

/* let accessAllowed;
let age = prompt("How old are you?");
if (age > 18) {
	accessAllowed = true;
} else {
	accessAllowed = false;
}
alert(accessAllowed); */

/* let age = prompt ("How old are you?");
let accessAllowed = (age > 18) ? true : false;        //result = condition ? value1 : value2;
alert (accessAllowed); */

/* let age = prompt( "Age?", "18" );
let message = (age < 3) ? "Hi baby!" :
	( age < 18) ? "Hello!" :
	( age < 100) ? "Greetings!" :
	"What an unusual age";
alert (message); */

/* let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
	alert("right");
}   else {
	alert("wrong");
} */

/* let name = prompt("What is the “official” name of JavaScript?");
if (name == "ECMAScript") {
	alert("Right!");
}   else {
	alert("You don’t know? ECMAScript!");
} */

/* let answer = prompt("Type a number", "0");
if (answer > 0) {
	alert(1);
} else if (answer < 0) {
	alert(-1);
}   else {
	alert(0);
} */

//lONGER CODE
/* let result;
if (a + b < 4) {
  result = 'Below';              
} else {
  result = 'Over';
} */

//SHORTER CODE
// let result = (a + b < 4) ? "below" : "over";

//LONGER CODE
/* 
let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

// SHORTER CODE
/* let message = (login == "Employee") ? "Hello" :
	(login == "Director") ? "Greetings" :     
	(login == " ") ? "No login" :
	""; */

//NULLISH COALSCING OPERATOR "??"
/* 
let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert (area); */

// if (age >= 14 && age <= 90);   //age range btw 14 and 90

// if (!age >= 14 && age <= 90);

/* let userName = prompt("Who's there?", "");

if (userName === "Admin") {
	let password = prompt("Password", "");

	if (password === "The Master") {
		alert("Welcome");
	} else if (password === "" || password === null) {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}
} else if (userName === "" || userName === null) {
	alert("Canceled");
} else {
	alert("I don't know you");
} */

// "DO" LETS YOU WRITE THE BOOLEAN BEFORE THE CONDITION (UPSIDE DOWN)
/* 
let i = 0;
	do {
		alert( i );
		i++;
	} while (i < 3); */

// WITHOUT "DO"
/* 
let i = 0;
	while (i < 3) {
		alert(i);
		i++;
	} */

//FOR
/* 
for (let i = 0; i < 3; 1++) {   //if condition → run body and run step
	alert(i);
	}

let i = 0;
	for (; i < 3;) {
		alert( i++ );
	} */

// BREAK IN A LOOP
/* let sum = 0;
while (true) {
	let value = +prompt("Enter a number", "");

	if (!value) break; // (*)   //THE BREAK (passing control to the first line after the loop. Namely, alert)

	sum += value;
}
alert("Sum: " + sum); */

// BREAK IN A LOOP (continue)
/* for (let i = 0; i < 10; i++) {
	
	// if true, skip the remaining part of the body
	if (i % 2 == 0) continue;

	alert(i); // 1, then 3, 5, 7, 9
} */

// OUTPUTS EVEN NUMBERS
/* for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
	  alert( i );
	}
  } */

/* var firstName = "Charles";
var firstLetter = firstName[0]; // brackets"[]" identify first letter of a string */

//ARRAYS WITHIN ARRAYS
/* var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
 */

//SWITCH STATEMENT
/* let a = 2 + 2;
switch (a) {
	case 3:
		alert("Too small");
		break;
	case 4:
		alert("Exactly!");
		break;
	case 5:
		alert("Too big");
		break;
	default:
		alert("I don't know such values");
} */

/* let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
	alert("this runs, because +a is 1, exactly equals b+1");
	break;
  default:
	alert("this doesn't run"); */

//GROUPED CASES
/* let a = 3;
switch (a) {
	case 4:
		alert('Right!');
		break;

	case 3: // (*) grouped two cases
	case 5:
		alert('Wrong!');
		alert("Why don't you take a math class?");
		break;

	default:
		alert('The result is strange. Really.');
} */

//SWITCH (Compares variable to multiple values)
/* switch (browser) {
	case "Edge":
		alert("You've got the Edge!");
		break;

	case "Chrome":
	case "Firefox":
	case "Safari":
	case "Opera":
		alert("Okay we support these browsers too");
		break;

	default:
		alert("We hope that this page looks ok!");
}
///SWITCH converted to "if"
let browser;
if (browser == "Edge") {
	alert("You've got the Edge!");
} else if (
	browser == "Chrome" ||
	browser == "Firefox" ||
	browser == "Safari" ||
	browser == "Opera"
) {
	alert("Okay we support these browsers too");
} else {
	alert("We hope that this page looks ok!");
} */

//"if" converted to SWITCH ("if" section)
/* let a = +prompt("a?", "");
	if (a == 0) {
		alert(0);
	}
	if (a == 1) {
		alert(1);
	}
	if (a == 2 || a == 3) {
		alert("2,3");
	}
///("SWITCH" section)
let a = +prompt("a?", "");
switch (a) {
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert("2,3");
	default:
		alert("Might be too high");
} */

/* let apt = "leader"
let signInTime = prompt ("time in", "");
	if (signInTime == "morning") {
		alert("early");
	}else if (signInTime == "noon") {
		alert("do better");
	}else {
		alert("demoted");
	} */

/* var car = {
	make: "volvo",
	speed: 160,
	engine: {
		size: 2.0,
		make: "bmw",
		fuel: "petrol",
		piston:[ {maker: "bmw"}, {maker: "bmw"} ],
	},
	drive: function() {return "drive";}
}; */

//house test
/* let house = {
	color: "white",
	doors: "wooden",
	toilets: 3,
	rooms: 3,
	kitchen: {
		fridge: "deep freezer",
		pots: 11,
		cylinder: "full",
		plates: 12,
	},
	compound: [
		"garden",
		"poultry",
		"carPark" [ { car: "benz" }, { car: "toyota" } ],
	],
}; */

/* const speak = function(name, time){
	console.log("Good" + time + name);
};
speak(' Mario', ' morning');


function test(name = "Elizabeth ", title = "Queen ") {
	console.log("Hail " + title + name );
};
test();

//HOW TO PASS VALUES INTO A FUNCTION
const calcArea = function(radius){
	let area =  3.14 * radius**2;		//return 3.14 * radius**2; (shorter code)
	return area;
}
const a = calcArea(5);		//create a memory pointer for the function(calcArea) so the function can be logged
console.log(a);
 */

/* function checkAge(age) {
	if (age >= 18) {
		return true;	//Execution stops at "return" and value is returned to the calling code then execution continues
	} else {
		return alert("Do you have permission from your parents?");
	}
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
	alert("Access granted");
} else {
	alert("Access denied");
} */

//FOR loop
/* const names = ["shaun", "mario", "luigi"];
for (let i = 0; i < names.length; i++) {	//.length calculates 'names' length of values (3 elements)
	console.log(names[i]);
}

//WHILE loop
const nameS = ["shaun", "mario", "luigi"];
let i = 0;
while (i < nameS.length) {
	console.log(nameS[i]);
	i++;
} */

//(.includes) identifies if a character is present in a var or value
/* const password = "p@ss12";
if (password.length >= 12 && password.includes("@")) {
	console.log("that password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
	console.log("that password is strong enough");
} else {
	console.log("password is not strong enough");
}
 */


/* //switch statement
const grade = "D";
switch(grade) {
	case "A":
		console.log("You got an A!");	//Case where grade is 'A', log this
		break;
	case "B":
		console.log("You got an B!");
		break;
	case "C":
		console.log("You got an C!");
		break;
	case "D":
		console.log("You got an D!");
		break;
	case "E":
		console.log("You got an E!");
		break;
	default:
		console.log("not a valid grade");
}
 */

/* //regular function
const calcArea = function(radius){
	return 3.14 * radius**2;
}
const result = calcArea(5);
console.log('area is:', result);
 */

/* //arrow function
const calcArea = (radius) => {	//parenthesis can drop its brackets if it has only one parameter 
	return 3.14 * radius**2;
};
let result = calcArea(5);
console.log('area is:', result);

const calcArea = radius => 3.14 * radius**2;	//shorter arrow function

 */


/* //regular function
const greet = function() {
	return "Hello World";
}
const result = greet();
console.log(result);
//above function (regular function) converted to an arrow function
const greet = () => "Hello World!";
const result = greet();
console.log(result);
 */

/* 
const bill = function (products, tax) {
	let total = 0;
	for(let i = 0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
}
console.log(bill([10,15,30], 0.2)); */

/* //Arrow function
const greet = () => "hello"
let resultOne = greet();
console.log(resultOne);
 */

//CALL BACK FUNCTION (where a function is passed as an argument to another function parameter)
/* 
const myFunc = (callbackFunc) => {
	let value = 50;
	callbackFunc(value);
};
myFunc(function(value){		//a call back function... it can also be converted into an arrow function
	console.log(value);
});
 */

/* let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach((person, index) => {
	console.log(index, person);
}); */

//LOGICAL OPERATORS || &&
/* const password = "p@ss";

if (password.length >= 12 && password.includes("@")){
	console.log("that password is mighty strong");
}	else if (password.length >= 8 || password.includes("@")) {
	console.log("that p assword is long enough!");
}	else {
	console.log("password is not long enough");
} */

//object literal

// let user = {
// 	name: "crystal",
// 	age: 30,
// 	email: "jay@mail",
// 	location: "berlin",
// 	// blogs: ["why mac and cheese rules", "10 things to make with marmite"],
// 	blogs: [
// 		{ title: "why mac and cheese rules", likes: 30 },
// 		{ title: "10 things to make with marmite", likes: 50 }
// 	],
// 	login: function () {
// 		console.log("the user logged in");
// 	},
// 	logout: function () {
// 		console.log("the user logged out");
// 	},
// 	logBlogs: function(){
// 		console.log("this user has written the following blogs:");
// 		this.blogs.forEach(blog => {
// 			console.log(blog.title, blog.likes);
// 		});
// 	}
// };

/* console.log(user);
console.log(user.name);

// user.age = 35;  //changes age to 35
console.log(user.age);

console.log(user["name"]); //square bracket notation

user["name"] = "chun-li"
console.log(user["name"]);
*/

// user.login(); // A string method is a way to call a function
// user.logout();
// user.logBlogs();


// // Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));	//ROUNDS A DECIMAL TO ITS NEAREST NUMBER (UP OR DOWN)
// console.log(Math.floor(area));	//ROUNDS A DECIMAL TO ITS NEAREST "LOWER" NUMBER (DOWN ONLY)
// console.log(Math.ceil(area));	//ROUNDS A DECIMAL TO ITS NEAREST "UPPER" NUMBER (UP ONLY)
// console.log(Math.trunc(area));	//TAKES AWAY NUMBER AFTER A DECIMAL POINT AND TURNS IT TO AN INTEGAR

// //RANDOM NUMBERS
// const random = Math.random();

// console.log(random); // "RANDOM" METHOD PICKS A RANDOM NUMBER BTW 1-0
// console.log(Math.round(random));	//LIKE ABOVE, 'MATH.ROUND' ROUNDS UP/DOWN A "IN THIS CASE A RANDOM NUMBER BTW 1-0"
// console.log(Math.round(random * 100));	// LOGS A RANDOM ROUNDED UP/DOWN NUMBER BTW 1-0

//PRIMITIVE VALUES
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// REFERENCE VALUES
// const userOne = { name: "ryu", age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);


// DOM
// const para = document.querySelector("p");
// console.log(para);

// const para = document.querySelector(".error");
// console.log(para);

// const paras = document.querySelectorAll("p");
// console.log(paras[1]);	//square bracket notation can be used to select particular elements needed

// const paras = document.querySelectorAll("p");	//"querySelectorAll()" selects all elements within its value
// paras.forEach(para => {
// 	console.log(para);
// });

// const title = document.querySelector("h1");
// console.log(title.style);
// console.log(title.style.color);	//LOGS THE COLOR PROPERTY OF THE STYLE ATTRIBUTE USED

// title.style.margin = "50px";	//SETS MARGIN IN STYLE ATTRIBUTE
// title.style.color = "crimson";	//SETS COLOR
// title.style.fontSize = "60px";	//SETS FONT SIZE
// title.style.margin = "";		//SETS AN EMPTY MARGIN

const paras = document.querySelectorAll("p");
paras.forEach(para => {							//FOR EACH PARAGRAPH FROM ALL THE PARAGRAPH
	if(para.textContent.includes("error")){		//IF  TEXT CONTENT OF PARAGRAPH INCLUDES "ERROR"
		para.classList.add("error");			//ADD A CLASS OF ERROR
	}
	if(para.innerText.includes("success")){		//IF  TEXT CONTENT OF PARAGRAPH INCLUDES "SUCCESS"
		para.classList.add("success");			//ADD A CLASS OF "SUCCESS"
	}
});