import React, {useContext} from "react";
import { RestaurantCard } from "./config";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {

    const data = useContext(UserContext);
    const isOnline = useOnline();
    return(data?.length===0)?(
        <Shimmer/>
    ):(
        <div className="RestaurantList">
           {isOnline ? data?.map((res) => {
                return <Link to={"/restaurant/"+res.info?.id} className="Cardinfo"><RestaurantCard {...res?.info}/></Link>
            }) : <h1>🔴Offline, Please check your Internet connection !!</h1>}
        </div>
    );
};
export default Body;

