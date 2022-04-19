// IF Statement >>> If...If

var prompt = require('prompt-sync')();
var enterString = prompt("Enter Any String:  ");

if (enterString >= 80)
    console.log("Congrats!  You Pass the Exam");
else if (enterString >= 60)
    console.log("Good! You Are Eligible For Commerce");
else if (enterString >= 50)
    console.log("All The Best");
else if (enterString < 35)
    console.log("Failed");
else
    console.log("Sorry! \tTry Next Time");
    
// Nested If 

var prompt = require('prompt-sync')();
var number = prompt("Enter Any Number:  ");
if (number == 42) {
    if (number < 40)
        console.log("Less");
    else
        console.log("Big");
} else {
    if (number == 52)
        console.log("Value is Eqaul");
    else
        console.log("Value is NotEqual");
}

//Switch Case 

var prompt = require('prompt-sync')();
var weekNo = Number(prompt("Enter Any Number:  "));

switch (weekNo) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter Valid Number");
        break;
}

//Nested Switch 

var prompt = require('prompt-sync')();
var alpha = prompt("Enter Character :  ");
switch (alpha) {
    case 'a':    // Grouped Statemnet of Switch Case 
    case 'e':
    case 'o':
    case 'u':
    case 'i':
        console.log("Vowel");
        break;
    case 'A':
        console.log("**********You Are in Capital Alphabate :-- \n Enter Capital Character:  ******* \t");
        var cap = prompt("Enter Character :  ");
        switch (cap) //Nested Case
        {
            case 'A':
            case 'E':
            case 'O':
            case 'U':
            case 'I':
                console.log(`${cap} is Vowel`);
                break;
            default:
                console.log(`${cap} Not Vowel`);
                break;
        }
        break;
    default:
        console.log("Not Vowel");
        break;
}
 

// Iteration Statement

var name = ["Amit", "Kanchan", "Sahiba", "Sayali", "Prakash", "Imran", "Abhilasha", "Aniket", "Arnav", "Ganesh"];

console.log("Names Are:  ");
for (let i = 0; i < name.length; i++) {
    process.stdout.write(name[i] + " ");
}

// For Of 
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
    console.log(text += x + " ");
}


