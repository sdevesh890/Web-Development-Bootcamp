//Single threaded
// Javascript at any given point of time , that single JS thread is running at most one line of JS code.

// But What happen when something takes long time ? will it work same ?
//Browser comes with WEB API that are able to handle some tasks in the background(like making request or setTimeout)
//JS call stack recognize these WEB API functions and passes them off to the browser to take care of

console.log("SENDING OF FILE...");
setTimeout(()=>
{
    console.log("Here is your file")
},3000)
console.log("HERE WE ARE END OF THE FILE..");

// Callback hell
const bodycolor = document.querySelector('body');
console.log('Start');
setTimeout(()=>
{
    bodycolor.style.backgroundColor = 'orange';
    console.log('orange fired');

    setTimeout(()=>
    {
    bodycolor.style.backgroundColor = 'yellow';
    console.log('yellow fired');
    setTimeout(()=>
    {
    bodycolor.style.backgroundColor = 'green';
    console.log('green fired');
    },3000)
        },2000);

},1000);

// searchMoviesAPI('amadeus',()=>
// {
//     saveMyDB(movies,()=>
//     {
//         //if it works , run this:
//     },()=>
//     {
//         // if it doesn't works , run this:
//     })
// },()=>
// {
//     //If API is down , or request failed.
// })
// console.log('End');