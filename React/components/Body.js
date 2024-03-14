import React from "react";
import { RestaurantCard } from "./config";
import { useState } from 'react';
import { restaurantList } from "./config";

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

export const Search=()=>
{
    const [restaurant , setRestautant] = useState(restaurantList);
    //searchText is a local state variable
    const [searchText, setsearchText] = useState();
    return(
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
                    setRestautant(data);
                }}>SEARCH</button>
            </form>
        </div>
    );
}
const Body = () => {
    return (
        <div className="RestaurantList">
            {restaurantList.map((res) => {
                return <RestaurantCard {...res} key={res.id} />;
            })}
        </div>
    );
};

export default Body;

