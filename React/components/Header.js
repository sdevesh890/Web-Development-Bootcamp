import React , {useContext} from 'react';
import Titlelogo from '../img/titleLogo.png';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import store from '../utils/store';
function filterData(searchText , restaurant) 
{
    const arr = [];

    for(let i=0; i<restaurant.length; i++)
    {
        if(restaurant[i].info.name.includes(searchText))
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
    const cartItem = useSelector(store => store.cart.items);
    useEffect(()=>
    {
        getRestaurant();
    },[])
    const [restaurant,setRestaurant] = useState();
    //searchText is a local state variable
    const [searchText, setsearchText] = useState();
    const getRestaurant = async() =>
    {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();

          async function checkJsonData(jsonData) {

            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }

          const resData = await checkJsonData(json);
          setrestData(resData);
          setRestaurant(resData);
    }

    return(
        <div className="header">
           <Title/>
           <div className="nav-items">
            <ul>
              <li><Link to="/" className='active'>Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart <span id='cartItem'>{cartItem.length}</span></Link></li>
              <li><Link to="/instamart">Instamart </Link></li>
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
                    const data =  filterData(searchText ,restaurant);
                    setrestData(data);
                }}>SEARCH</button>
            </form>
        </div>
        </div>
    );
}

export default Header;