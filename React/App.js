import React  from "react";
import ReactDOM from "react-dom/client";


  // --> CODE WITHOUT JSX
// const heading = createElement("h1",{
//     id:"heading",
//     className: "reactHead" ,
//     style : {
//         border: "2px solid black" , 
//         backgroundColor : "red",
//     },
//     key : "h1",
// },"My name is Devesh Shamra");

// const heading2 = createElement("h2",{

//     id : "heading2",
//     className : "reactHead2",
//     style: {
//         border : "2px solid black",
//         backgroundColor : "yellow"
//     } ,
//      key : "h2",
// },"Here I'm learning React");


//--> WITH JSX SYNTAX
//-> React Eelement
const heading = (
    <h1 id="title1" key="heading">This is a JSX CODE (Heading 1)</h1>
);

// functional Component
// NAME OF COMPONENT STARTS WITH CAPITAL LATTER
const Title = () => 
{
    return(
        <div>
            <h1>This is title of the page</h1>
        </div>
    );
}
const Myname = "Devesh Sharma";
const Header = () =>
{
    return (
        <div>
            <Title/>
            {/* {Title()} --> also can work */}
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            {heading}
            {Myname}
        </div>
    );
}


// const container = createElement("div",{},[heading]); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);
