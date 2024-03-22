import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./config";
import { restaurantList } from "./config";
import { Link } from "react-router-dom";
import Header from "./Header";
import Shimmer from "../utils/Shimmer";

const Body = ({restData}) => {
    return(restData?.length===0)?(
        <Shimmer/>
    ):(
        <div className="RestaurantList">
            {restData.map((res) => {
                return <Link to={"/restaurant/"+res.info?.id} className="Cardinfo"><RestaurantCard {...res?.info}/></Link>
            })}
        </div>
    );
};


export const Helper = () =>
{
   
    const[restData , setrestData] = useState([]);
     return (
        <>
         <Header setrestData = {setrestData}/>
         <Body restData = {restData}/>
        </>
    );
}
export default Body;

