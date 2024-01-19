// Default Params
const rollDie = (number = 15) =>
{
    return Math.floor(Math.random()*number)+1;
}

//Spread in function calls
let min = Math.min(1,2,3,78,98,-5);
const Array = [1,2,65,-5,45];
// min = Math.min(Array); --> min() take array as a single arguement
let max = Math.max(...Array); 
console.log(max);

// Spread with Array Literal

const cats = ['Catty','Rusky','Whity'];
const dogs = ['pitbull' , 'Bull','husky'];

const allPets = [1212,...cats , ...dogs,'ASASD'];
//Note --> it will only copy the array.

//Spreads with Objects

const user = {
    name : 'Devesh Sharma',
    category : 'CS',
    born : 2002 , 
    died : 2100 ,
};

const newUser = {...user,id : 4555};

// REST --> work like spread but not spread

function sum()
{
   console.log(arguments); //arguments which give information about how many arguments have passed from a fn. but its not an array , any fn of array will not work on it.
}

function raceResult(...nums)
{
    return nums.reduce((total,ele)=>
    {
        return total + ele;
    });
}


// Destructuring -> A short , clean syntax to 'unpack' , Values from arrays ,Properties from objects into distinct variable.


const scores = [854557,755558,4144,12455,56556,55511];

// const gold = scores[0];
// const silver = scores[1]; 

const [gold , silver , ...everyoneElse] = scores;

// D - structure Object


const {born , name} = user; //object property name variable

const {born: birthYear , name: userName, placed = 'YES'} = user; //custom name variable


// PARAMS D-Structure

// old ways to do 
// function fullName(user)
// {
//     return `${user.name} ${user.category}`;
// }

// function fullName(user)
// {
//     const{name , category} = user;
//     return `${name} ${category}`;
// }

// New ways to do
function fullName({name , category})
{
    return `${name} ${category}`;
}

