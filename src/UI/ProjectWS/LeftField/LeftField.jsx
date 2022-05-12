import React from 'react'
import { NavLink } from 'react-router-dom';
import "./LeftField.css"

const  LeftField = () => {

     return (
         <div className='clsLeftField'>

             
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            
            <div>
                <NavLink to="/rules">Rules</NavLink>
            </div>
            <div>
                <NavLink to="/records">Records</NavLink>
            </div>
            <div>
                <NavLink to="/game">Game</NavLink>
            </div>
         </div>
    );
};

    

export {LeftField};