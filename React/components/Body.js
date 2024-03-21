import React, { useState } from "react";
import { RestaurantCard } from "./config";
import { restaurantList } from "./config";
import { Link } from "react-router-dom";
import Header from "./Header";
const Body = ({restData}) => {
    return (
        <div className="RestaurantList">
            {restData.map((res) => {
                return <Link to={"/restaurant/"+res.info}><RestaurantCard {...res?.info}/></Link>
            })}
        </div>
    );
};


export const Helper = () =>
{
    
    const[restData , setrestData] = useState(restaurantList);
    return (
        <>
         <Header setrestData = {setrestData}/>
         <Body restData = {restData}/>
        </>
    );
}
export default Body;

