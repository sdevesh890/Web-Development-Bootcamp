import React from "react";
import ReactDOM from "react-dom/client";
import CRM from "./Exercises/Component";
// const heading  = React.createElement('h1',{},'Heading 1');
// const heading2 = React.createElement('h2',{id : 'title-2'},'Heading2');
// const div = React.createElement('div',{},[heading,heading2]);

// JSX
// const fruits = ["apple","banana","Orange"];
// const fruitShop = (
//     <h1 id="title" key="h1" style={{color : "red"}}>{fruits}</h1>
// );

//Component
// const Header =()=>
// {
//     return (
//         <div>
//             <h1>This is my HEADER 1</h1>
//         </div>
//     );

// }

// const Header2 =()=> (
//     <div>
//         <Header/> {/* Calling another component */}
//         <h2>This is my H2 heading in HEADER 2</h2>
//     </div>
// )

const FriendlyGreetings =({name , children}) => (
    <h1 style={{
        fontSize : '1.66rem', 
        textAlign : "center" , 
        color : "sienna"
    }}>
        Greetings, {name || children}
    </h1>
)

const element = React.createElement(
    FriendlyGreetings , 
    {
        name : "Krishna"
    }
);
console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
       {/* <FriendlyGreetings name = "Devesh Sharma"/>
       <FriendlyGreetings name = "Anita"/>
       <FriendlyGreetings>
        <div>Children Props Value</div>
        </FriendlyGreetings>
       {element} */}
       <CRM name= "Dev Sharma" job="Software Engineer" email="sdev56@gmail.com"/>
       <CRM name= "Dev Sharma" job="Software Engineer" email="sdev56@gmail.com"/>
       <CRM name= "Dev Sharma" job="Software Engineer" email="sdev56@gmail.com"/>
    </div>
);