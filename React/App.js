import React  from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{
    id:"heading",
    className: "reactHead" ,
    style : {
        border: "2px solid black" , 
        backgroundColor : "red",
    } 
},"My name is Devesh Shamra");

const heading2 = React.createElement("h2",{

    id : "heading2",
    className : "reactHead2",
    style: {
        border : "2px solid black",
        backgroundColor : "yellow"
    }
},"Here I'm learning React");

const container = React.createElement("div",{},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
