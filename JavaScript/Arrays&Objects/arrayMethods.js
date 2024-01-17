//forEach --> Accepts a callback function. Calls the function once per element in the array

const movies = [
    {
        title : 'sultan',
        score : 90
    },
    {
        title : '12th Fail',
        score : 95
    },
    {
        title : 'PK',
        score : 90
    },
    {
        title : 'Badhaai ho',
        score : 85
    }
];

// movies.forEach(function(movie)
// {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })

//Map --> Create a new array with the result of calling a callback on every element in the array.

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map((names) =>
{
    return names.first;
})


// Arrow Function

const add = (a,b) =>
{
    return a*b;
}

// setTimeOut

console.log("HELLO!!!");
setTimeout(()=>
{
    console.log("...are you still there ?");
},3000);
console.log("GOODBYE!!!");


//setInterval

const id = setInterval(()=>
{
    let rand = Math.floor(Math.random()*10)+1;
    if(rand==5)
    {
        clearInterval(id); //stop the Interval
    }
    console.log(rand)
},1500)


// filter method -> create a new array with all elements that pass the test implemented by the provided function.

const goodMovies = () =>
{
   const res = movies.filter((m)=>
    {
        return m.score>85;
    });
    return res;
}   

//Reduce


const prices = [0.55,4.99,18.99,15.20,78.56];

const sumOfPrice = prices.reduce((total,price)=>
{
    return total + price;
},10);

const highestMovie = movies.reduce((bestMovie , movie)=>
{
        if(movie.score>bestMovie.score)
        {
            return movie;
        }
        return bestMovie;
});


// 'This' keyword work with arrow function

const person = {
    firstName : 'Devesh',
    lastName : 'Sharma',
    fullName : ()=> //Didn't work with arrow function
    {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName : function()
    {
        setTimeout(()=>
        {
            console.log(`${this.firstName} ${this.lastName}`);
        },3000);
    }
}