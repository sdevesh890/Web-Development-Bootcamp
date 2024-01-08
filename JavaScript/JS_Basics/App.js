/*
   Primitive Types --> Number , String ,Boolean , Null , Undefined , BigInt , Symbol
 */

   //Numbers 
   console.log(3*5);
   console.log(17%3);
   console.log(2**4); //Exponent

//    NaN --> Is type of numerical value which means Not a number

console.log(0/0);
console.log(200 + NaN);
console.log(typeof NaN);
console.log(isNaN("hello")); //true coz string is not a number


/*
  Variable Name --> works as a container to store the data and give the name to memory location
  Types --> 
  Var --> value can change and redeclared.
  let --> value can change but cant redeclared.
  const --> value can't change and cant redeclared.

  i++ --> pre-Increment , first return origin value then increment
  ++i --> post-Increment , first increment and then return with new value;
  same like pre and post decrement works.
*/

var numLives = 10;
numLives+=20;
var numLives = 78;
console.log(numLives);

let saveDigit = 45;
saveDigit+=78;
// let saveDigit = "Hello"; //Error
console.log(saveDigit);

const value = 9;
// value+=45; Error occuried
console.log(value);


let i=0;
console.log(i++);
console.log(++i);

alert("Don't click okay it is very dangerous.");
let result = prompt("Please Enter the number");

let res = parseInt(result); // convert the string into int

console.log(res);