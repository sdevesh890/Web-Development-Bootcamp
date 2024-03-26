import React from "react";

class Profile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 1, 
            userInfo : 
            {
                name : "",
                avatar_url : "avatar_url" , 
            },
            count2 : []
        }
    }
   async componentDidMount()
    {
        try {
            const data = await fetch("https://api.github.com/users/sdevesh890");
            const json = await data.json();
            this.setState({
                userInfo: json,
            });

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    render()
    {   
        const {name , avatar_url} = this.state.userInfo;
        // const {count , count2} = this.state;
        return(
            <>

             <h1>Name : {name}</h1>
             <img src={avatar_url} alt="" />
             {/* <h1>Hello this is Profile class Component</h1>
             <p>name:{this.props.name}</p>
             <p>Count : {count}</p>
             <button onClick={
                ()=>
                {
                    this.setState(
                        {
                            count: count  + 1, 
                        }
                    )
                }
             }>setCount</button> */}
            </>
        );
    }
}

export default Profile;