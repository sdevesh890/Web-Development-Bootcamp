import React from "react";
import {useRouteError} from "react-router-dom";

const Error=()=>
{
    const err = useRouteError();
    return(
        <>
        <img src="" alt="" />
        <h1>OOPS!!!</h1>
        <h2>{err.status + ":  " + err.statusText}</h2>
        </>
    );
}

export default Error;