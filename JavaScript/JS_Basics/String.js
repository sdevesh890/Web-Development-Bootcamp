// String --> string of Character.

let name = "Devesh";
console.log(name);
console.log(name.length);

// Indices and position

console.log(name[0]);
console.log(name[15]);   // Won't give Error but undefined

let firstName = "Devesh";
let lastName = "Sharma";

let fullName = firstName + " " + lastName;
console.log(fullName);

let addOne = 1 + "h1";
console.log(typeof addOne);

console.log(4 - "1"); //Behave like a normal arithmetic calculation answer would be 3

// String methods

let str = "Hello what is this length of this string.";

console.log("length of the string " + str.length);
console.log(str.toUpperCase()); 
console.log(str.toLowerCase());

let trimStr = "   Hello this is trim string";
console.log(trimStr.trim());

console.log(str.indexOf('H'));
console.log(str.slice(0,6));

console.log(str.replace('this','that'));

console.log(str.repeat(10));

// String template Literal

let product = "Artichoke";
let price = 150;
let qty = 5;

console.log("You Bought "+ qty + " "+ " Artichoke. Total Price : " + price*qty); //quite difficult

console.log(`You Bought ${qty} Artichoke. Total Price: ${price*qty}`); //Easy One