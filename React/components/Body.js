import React from "react";
import { RestaurantCard } from "./config";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useOnline from "../utils/useOnline";
const Body = ({restData}) => {

    const isOnline = useOnline();
    return(restData?.length===0)?(
        <Shimmer/>
    ):(
        <div className="RestaurantList">
           {isOnline ? restData?.map((res) => {
                return <Link to={"/restaurant/"+res.info?.id} className="Cardinfo"><RestaurantCard {...res?.info}/></Link>
            }) : <h1>🔴Offline, Please check your Internet connection !!</h1>}
        </div>
    );
};
export default Body;

