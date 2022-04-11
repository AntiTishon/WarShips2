import React from 'react'
import "./Cell.css"
  

function  Cell  (props)  {
     return (
       
            <button className = "buttonCell" onClick={props.increaseCount}>{props.children}</button>
         
    );
};
   

export default Cell;