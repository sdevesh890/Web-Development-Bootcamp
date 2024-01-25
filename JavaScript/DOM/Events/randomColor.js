const btn = document.querySelector('#colorBtn');
const heading = document.querySelector('h1');
btn.addEventListener('click',()=>
{
    const redColor = Math.floor(Math.random()*255)+1;
    const blueColor = Math.floor(Math.random()*255)+1;
    const greenColor = Math.floor(Math.random()*255)+1;
    document.body.style.backgroundColor = `rgb(${redColor} , ${greenColor},${blueColor})`;
    heading.innerText = `rgb(${redColor} , ${greenColor},${blueColor})`;
});