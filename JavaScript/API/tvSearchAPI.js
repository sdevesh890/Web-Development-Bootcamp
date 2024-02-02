const input = document.getElementById('program');
const form = document.getElementById('formSearch');
const div = document.querySelector('.information');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const inputData = input.value;
    const fetchData = fetchRequest(inputData);
    fetchData.then((res)=>
    {
        for(let i of res)
        {
            const img = document.createElement('img');
            img.setAttribute('src',`${i.show.image.medium}`);
            div.append(img);
        }
    })
})


const fetchRequest = async(data) =>
{
    try {

        const req = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        const res = await req.json();
        return res;
    } catch (error) {
        console.log('ERROR!!!' , error);
    }
}
