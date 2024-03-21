import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>
{
    const {id} = useParams();
    useEffect(()=>
    {
        Restaurantdetails();
    },[]);

    const Restaurantdetails = async()=>
    {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);

        const json =  await data.json();
        console.log(json);
    }
    return(
        <>
        <h1>This is restaurant Menu</h1>
        </>
    );
}


export default RestaurantMenu;