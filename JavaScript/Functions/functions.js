// a function or subroutine is a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.

function greet()
{
    console.log("Hi!");
}

// greet();

function repeat(str , num)
{
    let result = '';
    for(let i=0; i<num; i++)
    {
        result+=str;
    }
    console.log(result);
}

// repeat('Devesh ',5);

function add(x , y)
{
    if(typeof x !== 'number' || typeof y !== 'number')
    return false;

    return x+y;
}

let result = add(1,'a');
if(result==false)
{
    console.log('Please give valid number');
}else 
{
    console.log(result);
}

// Function scope

let animal = 'Lion';

function animalName()
{
    let animal = 'Tiger';
    console.log(animal);
}

animalName();
console.log(animal);

// Block Scope

let radius = 8;

if(radius>0)
{
    const PI = 3.14159;
    let msg = 'HII!!';
}

// console.log(msg);

// Lexical Scope
function outer()
{
    inner();
    console.log("Hey, I'm outer function!!!");
    function inner()
    {
        console.log("Hey, I'm inner function!!");
    }
}

// inner(); Throw error of undefined
outer();

// Function Expression

const addnum = function(x,y)
{
    return x+y;
}
let res = addnum(10,20);
console.log(res);

// Higher Order Function -> function that operate on/with other function.
// they can accept other function as argument or return a function;

function callTwice(func)
{
    func();
    func();
}

function rollDice()
{
    let roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

callTwice(rollDice);
callTwice(rollDice);

// FUNCTION RETURN


function isBetween(min,max)
{
    return function(num) //returning a function
    {
        return num>min && num<max;
    }
}


// Method --> methods are actions that can be performed on objects.

const myMath = {
    PI : 3.14159 , 
    multiply : function(num1,num2)
    {
        return num1*num2;
    },
    add(num1,num2)
    {
        return num1 + num2;
    }
}

console.log(myMath.PI);
console.log(myMath.add(10,50));

// this keyword --> access other property in same object

const student = {
    name : 'Vikky' ,
    roll_no : 15, 
    details : function()
    {
        return `My name is ${this.name} and My roll no is ${this.roll_no}`;
    }
}

const studetail = student.details; //it will not print this.name or this.roll_no bcoz studetails not assosicate with any objects

// try and catch --> used to caught an error

function myHello(msg)
{
     try
     {
         console.log(msg.toUpperCase().repeat(3));
     }catch(e)
     {
        console.log("Please pass string next time!");
     }
     console.log("AFTER ERROR!!!"); //IT WILL WORK
    }
