for(let i=0; i<10; i++)
{
    console.log(i);
}

// Loop over Arrays

const animals = ['Lion','horse','dog','cat','donkey'];

for(let i=0; i<animals.length; i++)
{
    console.log(animals[i]);
}

// Nested Loop

const seatingChart = [
    ['Jammy' , 'Rahul' , 'Ketan'] , 
    ['Devesh', 'Jagger', 'Modi'],
    ['Manoj' , 'Pawan','Rohit'],
    ['Kejriwal' ,'Yogi','Bumrah']
];

for(let i=0; i<seatingChart.length; i++)
{
    let row = seatingChart[i];
    console.log(`Row #${i + 1}`);
    for(let j=0; j<row.length; j++)
    {
        console.log(row[j]);
    }
}

// While loop --> continue to running as long as condition is true.

const SECRET  = "BabyHippo";
let code  = prompt("enter the secret code...");

while(code!== SECRET)
{
 code  = prompt("enter the secret code...");
}
alert("CONGRATS!!! YOU GOT IT.")

// loop for..OF

for(let row of seatingChart)
{
    for(let person of row)
    {
        console.log(person);
    }
}

//loop over objects

const testScores = {
    Devesh: 97 , 
    Garima : 60 , 
    Ketan : 45 , 
    Puneet : 98 , 
    Rahul : 78
}

for(let score in testScores)
{
    console.log(score);
}