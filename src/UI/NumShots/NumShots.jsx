import React from 'react'
import "./Counter.css"

function  NumShots (props)  {

     return (
         <h1 id = "Counter">Shorts:{props.children}</h1>
    );
};
   

export {NumShots};