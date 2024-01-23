// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png

const addPokemon = document.querySelector('#container');
const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i=1; i<151; i++)
{
    const div = document.createElement('div');
    const span = document.createElement('span');
    const newImg = document.createElement('img');
    span.innerText = `#${i}`;
    newImg.setAttribute('src',`${URL}${i}.png`);
    div.append(newImg);
    div.append(span);

    addPokemon.append(div);
}

document.querySelector('title').innerText = 'Pokemon';
const h1 = document.createElement('h1');
h1.innerText = 'Look at my Pokemon';
document.body.insertAdjacentElement('afterbegin',h1);