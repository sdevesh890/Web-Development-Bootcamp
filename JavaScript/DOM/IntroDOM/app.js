// DOM --> The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

// console.dir(document); --> Give brief information about web pages document object.

// Select the object

// by ID -
const banner = document.getElementById("banner");

//By tag name

const allImage = document.getElementsByTagName('img');

// for(let imgs of allImage)
// {
//     console.log(imgs.src);
// }

// By class Name

const squareImages = document.getElementsByClassName('square');

//querySelectors
const para = document.querySelector('p'); //it will select only first paragraph
const paraAll = document.querySelectorAll('p'); // it will select all the paragraph

// for child element
const allLinks = document.querySelectorAll('p a'); //will give all the anchor tag inside the paragraph

// for(link of links)
// {
//     console.log(link.href);
// }


//innerText , textContent and innerHTML

//innerText --> used to update the content of element.

const heading = document.querySelector('h1');
// heading.innerText = 'Silkie Chickennnnsss'

// Note --> innerText is aware of the rendered appearance of text, while textContent is not.

//textContent --> similiar type of innerText.
const paratext = document.querySelector('p');
// paratext.textContent = 'Silky chickens are awesome!!'

//innerHTML --> innerText, textContent give only text of the element and innerHTML give element itself , and also use to update whole element.

const itali = document.querySelector('h1');
itali.innerHTML = '<i>Silky Chickens</i>';
// itali.innerHTML += '<sup>ZZZZ</sup>';


//getAttribute and setAttribute

const paratitle = document.querySelector('a');

// console.log(paratitle.getAttribute('title'));
// paratitle.setAttribute('href','https://www.google.com');


// Changing Style

for(let link of allLinks)
{
    link.style.color = 'red';
    link.style.textDecorationStyle = 'wavy';
    link.style.textDecorationColor = 'magenta';
}

//classList --> is used to add class for an element , you can add , remove , toggle the mutliple class.

const content = document.querySelector('h2');

content.classList.add('border','highlight');

console.log(content.classList.toggle('border'));


// parentElement , children , siblingElement

const Element  = document.querySelector('b');

const Elementparent = Element.parentElement;
console.log(Elementparent.children);
console.log(Element.nextElementSibling);
console.log(Element.previousElementSibling);

/*
    ----- Creating a Element and added to the other Element -----

    -- createElement
    -- appendChild --> Only a Node can insert 
    -- append
    -- after
    -- before 
    -- insertAdjcentElement -- only append Element
*/

const newImg = document.createElement('img');
newImg.setAttribute('src','https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg');

newImg.classList.add('square');

document.body.appendChild(newImg);
// document.body.appendChild('I am New!!'); will not work

document.body.append('Hello !!! I AM NEW HERE !!!');

const h1append = document.querySelector('h1');
const newh1 = document.createElement('h1');
newh1.innerText = 'Are adorable chickens';
h1append.insertAdjacentElement('afterend',newh1);


// After and before also work same
