const submit = document.querySelector('#shelter');
const input = document.querySelector('form input');
const ul = document.querySelector('#catsName');
submit.addEventListener('submit',function(e)
{
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = `${input.value}`;
    ul.append(li);
    input.value = "";
})

function makerandomColor()
{
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;

    return `rgb(${r},${g},${b})`;
}

// Event Bubbling
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');


button.addEventListener('click',function(e)
{
    container.style.backgroundColor = makerandomColor();
    e.stopPropagation();
});

container.addEventListener('click',function()
{
    container.classList.toggle('hide');
});

