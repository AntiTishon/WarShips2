import {findShot} from "../../UI/Cell/findShot";
import markFindShot from "../../UI/Cell/markFindShot";
import initialState from "../initialState/initialState";


function counter(state=initialState(), action) {
    console.log (state)
    let {shots, ships} = state;
    
    switch (action.type) {
    case "increase":
        return {...state, shots: shots + 1};
    case "toShot": {
            
            if (findShot(ships, action.numCell)) {

                console.log (action.numCell)
                return {...state, ships: markFindShot(ships, action.numCell)}
         
        }
    }
    default:
        return state;
    }
   }



export {counter};