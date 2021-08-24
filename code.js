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

/* //BATTLESHIP GAME
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

 */

hp test