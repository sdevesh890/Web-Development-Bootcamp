import React from "react";
import ReactDOM from "react-dom/client";
// import {Title, Search} from './components/Header' --> Named Import
import Header from "./components/Header"; //Default Import 
import SearchData from "./components/Body";
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
            <Header/>
            <SearchData/>
        </React.Fragment>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);