import React from "react";
import {createRoot} from "react-dom/client";



import { App } from "./UI/ProjectWS/App/App";

const destination = document.querySelector("#container");
// 

const root = createRoot(destination);
root.render(
    
    <App/>
)

