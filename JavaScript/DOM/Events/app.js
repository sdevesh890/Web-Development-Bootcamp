// Events --> responding to the user input and action.


// Approach - 2 --> still not good but yeah much better than A - 1.

const btn = document.querySelector('#v2');
document.querySelector('h1').onclick= () =>
{
    alert('You click the heading!!!');
}

// Approach - 3 , addEventListener
// difference b/w ADL v other approach is you can add multiple event in addEventListener

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click',()=>
{
    alert('clicked!!');
} , {once:true});

function makerandomColor()
{
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;

    return `rgb(${r},${g},${b})`;
}

const newBtn = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
for(let button of newBtn)
{
    button.addEventListener('click',colorize);
}

for(let h1 of h1s)
{
    h1.addEventListener('click',colorize);
}
function colorize()
{
    this.style.backgroundColor = makerandomColor();
    this.style.color = makerandomColor();
}

const buttons = document.querySelector('button');
buttons.addEventListener('click',function(evt)
{
    console.log(evt.target);
})

document.querySelector('input').addEventListener('keydown',function(evt)
{
   console.log(evt.code);
   console.log(evt.key);
})