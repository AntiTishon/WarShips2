import findShot from "../../UI/Cell/findShot";
import markFindShot from "../../UI/Cell/markFindShot";
import initialState from "../initialState/initialState";


function counter(state=initialState(), action) {
    console.log (state)
    let {shots, ships} = state;
    
    switch (action.type) {
    case "increase":
        return {...state, shots: shots + 1};
    case "toShot": {
            
            if (findShot(ships, 10)) {
                console.log ("fooooooo")
                return {...state, ships: markFindShot(ships, 10)}
            
        }
    }
    default:
        return state;
    }
   }



export default counter;