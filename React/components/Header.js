import React from 'react';
import Titlelogo from '../img/titleLogo.png';
import { useState } from 'react';
import { restaurantList } from './config';

function filterData(searchText , restaurant) 
{
    const arr = [];

    for(let i=0; i<restaurant.length; i++)
    {
        if(restaurant[i].name.includes(searchText))
        {
            arr.push(restaurant[i]);
        }
    }
    return arr;

}


export const Title = () =>
{
    return(
        <>
             <a href="/">
           <img src={Titlelogo} alt="Logo Image" id="LogoImg" />
           </a>
        </>
    );
}

const Header =({setrestData})=>
{
    const [restaurant , setRestautant] = useState(restaurantList);
    //searchText is a local state variable
    const [searchText, setsearchText] = useState();
    return(
        <div className="header">
           <Title/>
           <div className="nav-items">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Cart</a></li>
            </ul>
           </div>
           <div className="SearchItem">
            
            <form action="">
                <input 
                type="text"
                name="" 
                id="Searchinput" 
                placeholder="Search Your Item" 
                value={searchText}
                onChange={(e)=> {
                    setsearchText(e.target.value);
                }}
                />
                <button type="submit" id='input-btn'
                onClick={(e)=>
                {   
                    e.preventDefault();
                    const data =  filterData(searchText , restaurant);
                    setrestData(data);
                
                }}>SEARCH</button>
            </form>
        </div>
        </div>
    );
}

export default Header;