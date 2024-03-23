import React from "react";
import Logo from "../img/loading.webp";
const Shimmer = () =>
{
    return(
        <>
        {
            Array(25).fill(" ").map((e)=>(
                <div className="loadingGif"><img src={Logo} alt="" /></div>
            ))
        }
        </>
    );
}

export default Shimmer;