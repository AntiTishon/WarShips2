import React from 'react'
import "./Field.css"
import W_Cell from '../Cell/W_Cell.jsx';
import W_NumShots from '../NumShots/NumShots';


function  Field  (props)  {

     return (
         <>
         <div>
            {[... new Array(100)].map((_, ind) => (<W_Cell key = {ind} > {ind} </W_Cell>))}
                    
              
            
         </div>
         <W_NumShots>{props.countValue}</W_NumShots>
         </>
    );
};

export default Field;