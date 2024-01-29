//Async --> A newer and cleaner syntax for working with async code! Syntex "Makeup" for promises
// Async func always return a promises , if func return a value , the promise will resolved with that value.
//If the func throw an exception the promise will be rejected.

// async function hello()
// {
//     return 'HELLO!!!';
// }

// const login = async(username , password)=>
// {
//     if(!username || !password) throw "Missing Credential";

//     if(password=='Imlogin')return "WELCOME";
//     throw "Invalid Password";
// }

// login('asdad','Imlogin').then((data)=>
// {
//     console.log(`Your login success`);
//     console.log(data);
// }).catch((err)=>
// {
//     console.log('ERROR IS :',err);
// })


// const delayColorChange = (color) =>
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             document.body.style.backgroundColor = color;
//             resolve();
//         },1000)
//     })
// }

// async function rainbow()
// {
//     await delayColorChange('red');
//     await delayColorChange('yellow');
//     await delayColorChange('magenta');
// }

// rainbow().then(()=>
// {
//     console.log('END OF RAINBOW');
// })

const fakeRequestPromise = (url) =>
{
    return new Promise((resolve,reject)=>{

        const delay = Math.floor(Math.random()*4500)+500;

        setTimeout(()=>
        {
            if(delay>4000)
            {
                reject('Connection timeout :(');

            }else 
            {
                resolve(`Your fake data ${url} has been resolved`);
            }
        },delay)
    })
}


async function fakeRequest()
{
    try{
        const data1 = await fakeRequestPromise('books.come/pages1');
        // console.log(data1);
        const data2 = await fakeRequestPromise('books.come/pages2');
        // console.log(data2);
        await fakeRequestPromise('books.come/pages3');
        await fakeRequestPromise('books.come/pages4');
    } catch(err)
    {
        console.log('ERROR IS:',err);
    }
}