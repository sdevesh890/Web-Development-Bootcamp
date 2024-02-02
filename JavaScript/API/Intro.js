// AJAX --> AJAX allows web pages to update small bits of content without requiring a full page reload, making the user experience smoother and more interactive.
//XML (sometimes): Originally, XML was used as the data format for communication between the browser and the server, but nowadays, JSON (JavaScript Object Notation) is more commonly used due to its simplicity.

//AJAJ --> AJAJ is a technology that makes web pages more dynamic and responsive by allowing them to update content asynchronously using JavaScript and JSON.

// JSON.parse is used to convert a JSON string into a JavaScript object.
// JSON.stringify is used to convert a JavaScript object into a JSON string.

const jsonString = '{"name": "John", "age": 30}';

const parseObject = JSON.parse(jsonString);

console.log(parseObject);

//JSON.stringify

const person = {name:'Devesh',age:22};
const jsonData = JSON.stringify(person);
console.log(jsonData);


//HTTP --> HEADER
//HTTP headers let the client and the server pass additional information with an HTTP request or response.

//XHR Request

const req = new XMLHttpRequest();

req.onload = function()
{
    console.log('IT LOADED!!');
    const data = JSON.parse(this.responseText);
    console.log(data.name , data.height);
}

req.onerror = function()
{
    console.log('ERROR!!!!');
}

req.open("GET","https://swapi.dev/api/people/1");
req.send();
