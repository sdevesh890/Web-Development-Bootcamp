import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
} from "../utils/Constant";
import useRestaurant from "../utils/useRestaurant"
const RestaurantMenu = () =>
{
    const {id} = useParams();
    const [restaurantDetails , setRestaurantDetails] = useState([]);
    const [restaurantMenu , setRestaurantMenu] = useState([]);
    useEffect(()=>
    {
        Restaurantdetails();
    },[]);
    const Restaurantdetails = async()=>
    {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);

        const json =  await data.json();
        // console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
        const menuItemsData =
                    json?.data?.cards
                        .find((x) => x.groupedCard)
                        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                            (x) => x.card?.card
                        )
                        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                        ?.map((x) => x.itemCards)
                        .flat()
                        .map((x) => x.card?.info) || [];

                const uniqueMenuItems = [];
                menuItemsData.forEach((item) => {
                    if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                        uniqueMenuItems.push(item);
                    }
                });

                setRestaurantMenu(uniqueMenuItems);
                
    }
    return(
        <div>
        <div>
            <img
                className="restaurant-img w-64 h-44 border-r-4  mt-4"
                src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
                alt={restaurantDetails?.name}
            />
            <div>
                <h2>{restaurantDetails?.name}</h2>
                <p>{restaurantDetails?.cuisines?.join(", ")}</p>

            </div>
        </div>

        <div>
            <div>
                <div>
                    <h3>Recommended </h3>
                    <p>{restaurantMenu?.length} ITEMS</p>
                </div>
                <div>
                    {restaurantMenu.map((item) => (
                        <div key={item?.id}>
                            <div>
                                <h3>{item?.name}</h3>
                                <p>
                                    {item?.price > 0
                                        ? new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                        }).format(item?.price / 100)
                                        : " "}
                                </p>
                            </div>
                            <div>
                                <div>{item?.description}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}


export default RestaurantMenu;