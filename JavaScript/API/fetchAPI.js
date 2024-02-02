// fetch("https://swapi.dev/api/people/1")
// .then((res)=>
// {
//     console.log(res);
//     return res.json();
// })
// .then((data)=>
// {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2");
// })
// .then((res)=>
// {
//     return res.json();
// })
// .then((data)=>
// {
//     console.log(data);
// })
// .catch((err)=>
// {
//     console.log("ERORR!!",err);
// })


// fetch api using async and await

const fetchRequest = async()=>
{

    try {
        
        const res =  await fetch("https://swapi.dev/api/people/1");
        const data =  await res.json();
        console.log(data);
     
        const res2 =  await fetch("https://swapi.dev/api/people/2");
        const data2 =  await res2.json();
        console.log(data2);
    } catch (error) {
        console.log('ERROR!!!',error);
    }
} 

fetchRequest();


// Axios --> third party library to make HTTP Request.

// axios('https://swapi.dev/api/people/1')
// .then((res)=>{
//     console.log(res.data);
// }).catch((e)=>
// {
//     console.log('ERROR!!!!',e);
// }
// )

const req = async (id) => 
{
   try {
    const res = await axios(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
   } catch (error) {
        console.log('ERROR!!!',error);
   }
}

req(5);