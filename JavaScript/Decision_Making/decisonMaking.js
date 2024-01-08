/*
  Comparsion Operator --> > , < , == , <= , => , != , === , !==
*/

let num1 = 12;
let num2 = 15;

console.log(num1<num2);
console.log(num1>num2);
console.log(num1!=num2);
console.log(num1 == '12'); // true because it will not check the data type its only match the value
console.log(num1 === '12'); // false coz its checked the value as well as Data type also.
console.log(num1 !== '12'); 

// Condition

// let age = prompt("Please Enter your age");

// if(age<20)
// {
//    alert("You will get 20% discount");
// }else if(age<50)
// {
//    alert("You will get 35% discount");
// }else
// {
//    alert("You will get the 45% discount");
// }

/*

All JS value have an inherent truthyness or falsyness
about them.

Falsy value -
undefine
null
empty string
0
false

--> Everything else is truthy!
*/

if(undefined)
{
   console.log("Truthy!");
}else 
{
   console.log("Falsy!");
}

let day = prompt("Enter the Week Day number");
day = parseInt(day);
switch(day)
{
   case 1: console.log("Monday");
   break;
   
   case 2: console.log("Tuesday");
   break;

   case 3: console.log("Wednesday");
   break;
   
   case 4: console.log("Thursday");
   break;
   
   case 5: console.log("Friday");
   break;
   
   case 6: console.log("Saturday");
   break;
   
   case 7: console.log("Sunday");
   break;

   default : console.log("Invalid Number");
}