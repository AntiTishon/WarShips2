import React from 'react'
import "./Cell.css"
  



function Cell(props)  {
     return (
       
            <button className = "buttonCell" onClick = {() => {props.increaseCount();
                props.toShot(props.numCell)}}>{props.children}</button>
         
    );
};
   

export {Cell};