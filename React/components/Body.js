import React, { useState } from "react";
import { RestaurantCard } from "./config";
import { restaurantList } from "./config";
import Header from "./Header";
const Body = ({restData}) => {
    return (
        <div className="RestaurantList">
            {restData.map((res) => {
                return <RestaurantCard {...res} key={res.id} />;
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

