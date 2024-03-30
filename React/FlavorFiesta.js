import React , {lazy , useState , Suspense} from "react";
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
import Shimmer from "./utils/Shimmer";
// import Instamart from "./components/Instamart"

//On-demand Loading -> upon render -> react suspend loading
const Instamart = lazy(()=> import("./components/Instamart"));
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
    },
    {
        path : "/instamart",
        element : 
        (
            <Suspense fallback={<Shimmer/>}>
                <Instamart/>
            </Suspense>
        )
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);