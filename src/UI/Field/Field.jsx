import React from 'react'
import "./Field.css"
import {CellContainer} from '../Cell/CellContainer.jsx';
import {NumShortsContainer} from '../NumShots/NumShotsContainer.jsx';




function  Field(props)  {

     return (
         <>
         <div>
            {[... new Array(100)].map((_, ind) => (<CellContainer key = {ind} numCell = {ind}> {ind} </CellContainer>))}
                    
              
            
         </div>
         
         <NumShortsContainer>
            {props.countValue}
         </NumShortsContainer>
         </>
    );
};

export  {Field};