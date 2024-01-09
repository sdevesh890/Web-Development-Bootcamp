/*
 Objects are collection of properties. 
 Property are key-value pair 
 Rather than accessing data using index , we use custom keys
*/

let Product = {

    userName : "Gummy Bears" , 
    inStock : true , 
    price : 1.99 , 
    flavors : ["grape" , "apple", "cherry"]

}

// Access the Property

console.log(Product.userName); // Okay but for not work with few cases
console.log(Product["flavors"][1]); // Work on every cases

// Modification
Product["price"] = 5.99;
Product["flavors"].push('lemon'); //New item insert in the array value
Product.expiryDate = "23-9-2024";

// Arrays + Objects

const student = {

    firstName : 'Dammy' , 
    lastName : 'Jagger' , 
    strength: ['Music','Arts'],
    exams : {
        midterm:92 , 
        final : 88
    }
}

const shoppingCart = [
    {
        product : 'Jenga Classic' , 
        price : 68.88 , 
        quantity : 1
    } , 
    {
        product : 'Echo Dot' , 
        price : 15.52 ,
        quantity : 25
    } ,
    {
        product : 'Fire Stick' , 
        price : 39.99 , 
        quantity : 2
    }
]


// Access and Modifying the NEsted Array and Object

console.log(student['exams']['final']);
console.log(shoppingCart[0]['product']);

