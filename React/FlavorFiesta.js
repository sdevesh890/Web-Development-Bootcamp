import React , {lazy , useState , Suspense} from "react";
import ReactDOM from "react-dom/client";
// import {Title, Search} from './components/Header' --> Named Import
// import Header from "./components/Header"; //Default Import 
// import Body from "./components/Body";
import UserContext from "./utils/UserContext";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Shimmer from "./utils/Shimmer";
import Footer from "./components/Footer"
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart"
//On-demand Loading -> upon render -> react suspend loading
const Instamart = lazy(()=> import("./components/Instamart"));
const Applayout = () =>
{
    const[restData , setrestData] = useState([]);
    return(
        <Provider store={store}>
        <UserContext.Provider value={restData}>
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
             <Outlet/>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            }
            ,
            {
                path:"/about",
                element : <About/>,
                children :[
                    {
                        path:"profile",
                        element : <Profile name={"Devesh Sharma"}/>
                    },
                ] 
            },
            {
        
                path:"/restaurant/:id",
                element : <RestaurantMenu/>
            },
            {
                path : "/instamart",
                element : 
                (
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
                )
            },
            {
                path : "/cart",
                element : (
                    <Suspense fallback={<Shimmer/>}>
                        <Cart/>
                    </Suspense>
                )
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);