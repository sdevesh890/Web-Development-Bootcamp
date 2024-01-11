let maxNum = parseInt(prompt("Enter the Maximum Number!"));
while(!maxNum)
{
    maxNum = parseInt(prompt("Enter the valid Number"));
}
let randomNum = Math.floor(Math.random()*maxNum)+1;
let guessNum = parseInt(prompt("Please enter the first guess"));
let count = 1;

while(parseInt(guessNum)!==randomNum)
{
    if(guessNum==='q')
    {
        break;
    }
    if(guessNum < randomNum)
    {
        guessNum = prompt("too low , Please try again !!");
        count++;
    }else if(guessNum > randomNum)
    {
        guessNum = prompt("too high , Please try again !!");
        count++;
    }
}

if(guessNum==='q')
{
    alert("Okay , YOU QUIT!!")
}else
alert(`CONGRATS!! YOU DONE IT IN ${count} ATTEMPT`);