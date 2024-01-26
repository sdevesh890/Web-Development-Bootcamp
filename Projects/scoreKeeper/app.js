const p1btn = document.getElementById('p1btn');
const p2btn = document.getElementById('p2btn');
const reset = document.getElementById('reset'); 
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
const limit = 5;

p1btn.addEventListener('click',function()
{
    if(!isGameOver)
    {
       p1Score+=1;
       if(p1Score==limit)
       {
         isGameOver = true;
         p1btn.classList.add('disabled');
         p2btn.classList.add('disabled');
         player1.classList.add('winner');
         player2.classList.add('loser');
       }
       player1.textContent = p1Score;
    }
});

p2btn.addEventListener('click',function()
{
    if(!isGameOver)
    {
       p2Score+=1;
       if(p2Score==limit)
       {
         isGameOver = true;
         p1btn.classList.add('disabled');
         p2btn.classList.add('disabled');
         player2.classList.add('winner');
         player1.classList.add('loser');
       }
       player2.textContent = p2Score;
    }
});





reset.addEventListener('click',function()
{
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player2.classList.remove('winner','loser');
    player1.classList.remove('loser','winner');
    p1btn.classList.remove('disabled');
    p2btn.classList.remove('disabled');
});