import { useRouteError } from "react-router-dom";
function Error()
{
    const error = useRouteError();
    return(
        <>
        <h1>Oops! Something wrong.</h1>
        <p>{error.statusText}</p>
        <p>{error.status}</p>
        </>
    );
}

export default Error;