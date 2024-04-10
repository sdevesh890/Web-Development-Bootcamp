import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShimmerSimpleGallery} from "react-shimmer-effects";
import {
    MENU_ITEM_TYPE_KEY,
} from "../utils/Constant";
import { additem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
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
    const dispatch = useDispatch();
    const handleItem = (item)=>
    {
       dispatch(additem(item));
    }
    return (restaurantMenu.length===0)?(
       <div>
      <ShimmerSimpleGallery card imageHeight={300} caption />
       </div>
    ):(
        <div className="restaurant-menu">
        <div className="restaurant-details">
          <img
            className="restaurant-img"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails?.name}
          />
          <div className="details">
            <h2>{restaurantDetails?.name}</h2>
            <p>{restaurantDetails?.cuisines?.join(", ")}</p>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-header">
            <h3>Menu</h3>
            <p>{restaurantMenu?.length} ITEMS</p>
          </div>
          <div className="menu-items">
            {restaurantMenu.map((item) => (
              <div key={item?.id} className="menu-item">
                <div className="item-details">
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
                <div className="description">{item?.description}</div>
                <div className="Menubtn"><button onClick={()=> handleItem(item)}>Add +</button></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}


export default RestaurantMenu;