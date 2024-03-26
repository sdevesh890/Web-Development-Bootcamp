import React , {useState} from "react";
import ReactDOM from "react-dom/client";
// import {Title, Search} from './components/Header' --> Named Import
// import Header from "./components/Header"; //Default Import 
// import Body from "./components/Body";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Header from "./components/Header";

const Applayout = () =>
{
    const[restData , setrestData] = useState([]);
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
             <Header setrestData = {setrestData}/>
             <Body restData = {restData}/>
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
        element : <About/>
    },
    {

        path:"/restaurant/:id",
        element : <RestaurantMenu/>
    },
    {
        path:"/about/profile",
        element : <Profile name={"Devesh Sharma"}/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);