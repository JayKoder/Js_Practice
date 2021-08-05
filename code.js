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



/* 
let accessAllowed;
let age = prompt ("How old are you?");
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
alert (accessAllowed); */


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



/* 
let userName = prompt("Who's there?", "");

    if (userName === "Admin") {

        let password = prompt("Password", "");

            if (password === "The Master") {
                alert("Welcome");
            }   else if (password === "" || password === null) {
                alert("Canceled");
            }   else {
                alert("Wrong password");
            }

    }   else if (userName === "" || userName === null) {
        alert("Canceled");
    }   else {
        alert("I don't know you");
    } */