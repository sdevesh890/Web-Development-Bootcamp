// Arrays --> Arrays are Data structure which is used to store multiple data value in single variable

let colors = ['rad' , 'orange' , 'yellow' , 'NaN' , 'undefined'];

console.log(colors.length); //Length of the array
console.log(colors[2]); //Access random Element of an array
console.log(colors[2][0]); //Access single value of random element of an array

//Modification

colors[3] = 'green'; 

//Push an element

colors[5] = 'Black'; //Not a right way to do like this

// Array Method

colors.push('blue'); //Insert the element at the end 
colors.pop(); //Delete the element at the end
colors.shift(); //DELETE THE ELEMENT FROM THE BEGINNING
colors.unshift('Magenta'); //Insert at the beginning

let arr1 = ['a','b'];
let arr2 = ['c','d'];

let arr3 = arr1.concat(arr2); // concat the both the arrays.

console.log(colors.includes('Black')); //Return boolean value if array contains given input.

console.log(colors.indexOf('Black')); // Give index of the given input 

arr3.reverse(); //Reverse the array

let sliceColors = colors.slice(2,5); //Copy the elements of array into another

colors.splice(2,0,'Dark-Orange'); //insert or delete any elements at any position.


let nums = [1,2,3,4];
let numsCopy = [1,2,3,4];

console.log(nums===numsCopy);

// Answer would be false , both array pointing to different memory allocation

let numCopy = nums;

console.log(nums===numCopy); //true :)




