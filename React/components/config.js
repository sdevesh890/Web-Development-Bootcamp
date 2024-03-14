import React from "react";
export const RestaurantCard =({name , avgRating , cuisines , areaName , cloudinaryImageId})=>
{
    return(
        <div className="Card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId} alt="Burger King" />
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        </div>
    );
}

//Config Driven UI
export const restaurantList = [
    {
    "id": "144020",
    "name": "UBQ by Barbeque Nation",
    "cloudinaryImageId": "fkrillp6fs8ig7p3torx",
    "locality": "Ashok Cosmos Mall",
    "areaName": "Civil Lines",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "10804",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 51,
    "lastMileTravel": 6.8,
    },
    "availability": {
    "nextCloseTime": "2024-03-12 23:00:00",
    "opened": true
    },
    },
    {
    "id": "253782",
    "name": "McDonald's",
    "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
    "locality": "UP Agra TDI Mall",
    "areaName": "Tajganj",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.7,
    },
    },
    {
    "id": "809929",
    "name": "Burger King",
    "cloudinaryImageId": "4311bdadd4a6539042d570c04335d209",
    "locality": "Fatehabad Road",
    "areaName": "Agra",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 1.8,
    
    },
    },
    {
    "id": "75858",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Tajganj",
    "areaName": "Tajganj",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 2.6,
    },
    },
    {
    "id": "35561",
    "name": "Dasaprakash",
    "cloudinaryImageId": "59ef6ec974bcff29ce0463da17c4cda6",
    "locality": "Sector 104, Expressway",
    "areaName": "Tajganj",
    "costForTwo": "₹700 for two",
    "cuisines": [
    "South Indian",
    "North Indian",
    "Continental",
    "Chinese"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "68689",
    "avgRatingString": "4.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 3,
    },
    },
    {
    "id": "674149",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
    "locality": "CROWN PLAZA",
    "areaName": "Tajganj",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "parentId": "4961",
    "avgRatingString": "4.0",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 1.7,
    },
    },
    {
    "id": "74720",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Tajganj",
    "areaName": "Tajganj",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.2,
    "parentId": "721",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 2.1,
    },
    },
    {
    "id": "75743",
    "name": "Berco's -If You Love Chinese",
    "cloudinaryImageId": "318fef5f3d67765fecf8045cecef6d49",
    "locality": "Tajganj",
    "areaName": "Tajganj",
    "costForTwo": "₹850 for two",
    "cuisines": [
    "Chinese",
    "Thai",
    "Asian"
    ],
    "avgRating": 4.4,
    "parentId": "471817",
    "avgRatingString": "4.4",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 2,
    },
    },
    {
    "id": "780599",
    "name": "Little Italy",
    "cloudinaryImageId": "020ae6de4b41aae52ac4c7c3270ae8a4",
    "locality": "Nagar Nigam Food Safety Zone",
    "areaName": "FATEHABAD ROAD",
    "costForTwo": "₹1200 for two",
    "cuisines": [
    "Italian",
    "Pizzas",
    "Pastas",
    "Salads",
    "Desserts"
    ],
    "avgRating": 3.4,
    "veg": true,
    "parentId": "600",
    "avgRatingString": "3.4",
    "totalRatingsString": "7",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 2,
    },
    }

];
