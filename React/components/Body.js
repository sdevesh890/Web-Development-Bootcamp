import React from "react";
import { RestaurantCard } from "./config";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";

const Body = ({restData}) => {
    return(restData?.length===0)?(
        <Shimmer/>
    ):(
        <div className="RestaurantList">
            {restData?.map((res) => {
                return <Link to={"/restaurant/"+res.info?.id} className="Cardinfo"><RestaurantCard {...res?.info}/></Link>
            })}
        </div>
    );
};
export default Body;

