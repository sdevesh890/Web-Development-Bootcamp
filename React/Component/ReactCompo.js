import React from "react";


class ReactCompo extends React.Component
{
    constructor(props)
    {
        super(props)
        // State management
        //WE DO NOT MUTATE STATE DIRECTLY.
        this.state = {
            count : 0,
            count2 : 1,
        }
        console.log("Constructor");
    }
    componentDidMount()
    {
      console.log("Component Did Mount");
      
    }
    componentDidUpdate()
    {
      console.log("Component Did Update");
      
    }
   render()
   {
      console.log("render");
      
      return(
        <>
      <h1>My name is {this.props.name}</h1>
      <h2>And i live in {this.props.location}</h2>
      <p>Count : {this.state.count}</p>
      <button onClick={()=>
        {
            this.setState({count : this.state.count + 1 });
        }
      }>Count++</button>
      </>
      );
   }
}

export default ReactCompo;