//Event Handler

export function Event()
{
    function clickMe()
    {
        alert('Btn 1 is clicked');
    }
    return(
        <>
        <button type="submit" onClick={clickMe}>Button 1</button>
        <button type="submit">Button 1</button>
         <input type="text" name="" id="" />
        </>
    );
}
