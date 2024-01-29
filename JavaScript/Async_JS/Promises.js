const fakeRequestCallback = (url,success,failure) =>
{
    const dely = Math.floor(Math.random()*4500) + 500;
    
    setTimeout(()=>
    {
        if(dely>4000)
        {
            failure('Connection Timeout :(');
        }else 
        {
            success(`Here is your fake data from ${url}`);
        }
    },dely)
};

fakeRequestCallback('books.com/page1',(response)=>
{
    console.log('Success');
    console.log(response);
    fakeRequestCallback('books.com/page2',(response)=>
    {
        console.log('Success (2nd req)');
        console.log(response);
        fakeRequestCallback('books.com/page3',(response)=>
        {
            console.log('Success (3rd req)');
            console.log(response);
        },(err)=>
        {
            console.log('failure (3rd req)',err);
        })
    },(err)=>
    {
        console.log('failure (2nd req)',err);
    })
},(err)=>
{
    console.log('failure',err);
})

// Promises

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

fakeRequestPromise('books.com/page1')
.then((data)=>
{
    console.log(data);
    return fakeRequestPromise('books.com/pages2');
}).then((data)=>
{
    console.log(data);
    return fakeRequestPromise('books.com/pages3');
})
.then((data)=>
{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

//Color Change Promise

const colorChange = (color , delay) =>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            document.body.style.backgroundColor = color;
            resolve(`${color} changed`);
        },delay)
    })
}

colorChange('red',1000)
.then((data)=>
{
    console.log(data);
    return colorChange('orange',1000);
}).then((data)=>
{
    console.log(data);
})