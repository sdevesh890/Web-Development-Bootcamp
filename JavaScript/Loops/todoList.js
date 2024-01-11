
let list = [];
let flag = true;
while(true)
{
    let input = prompt("What would you like to do ?");
    if(input=='quit')
    {
        break;
    }else if(input=='new')
    {
        let item = prompt("Please Enter the task.");
        list.push(item);
    }else if(input=='list')
    {
        for(let i=0; i<list.length; i++)
        {
            console.log(i+" : "+list[i]);
        }
    }else if(input=='delete')
    {
        let index = parseInt(prompt("Please enter the index. "));
        list.splice(index,1);
    }
}
console.log("You are outside the loop");