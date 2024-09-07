import React from "react";
import {createRoot} from "react-dom/client";

const Form = (
    <form action="
    ">
        <label htmlFor="search-Input">Search:</label>
        <input type="text" name="search" id="search-Input" />
        <button aria-label="Submit" className="submit-btn">
            <img src="https://sandpack-bundler.vercel.app/img/arrow-right.svg" alt="" />
        </button>
    </form>
);

const root = createRoot(document.getElementById('root'));
root.render(Form);