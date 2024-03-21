import React from "react";
import ReactDOM from "react-dom/client";
// import {Title, Search} from './components/Header' --> Named Import
// import Header from "./components/Header"; //Default Import 
// import Body from "./components/Body";
import { Helper } from "./components/Body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () =>
{
    return(
        <React.Fragment>
            {/* 
             - Header
                - Navbar
                - search
             - Body
               - Restaurant Cart
             - Footer
                - links
             */}
             <Helper/>
        </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement: <Error/>,
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/restaurant/:id",
        element : <RestaurantMenu/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);