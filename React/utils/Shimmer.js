import React from "react";

const Shimmer = () =>
{
    return(
        <>
        {
            Array(25).fill(" ").map((e)=>(
                <div className="Shimmer"></div>
            ))
        }
        </>
    );
}

export default Shimmer;