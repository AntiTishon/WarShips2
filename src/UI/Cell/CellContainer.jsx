import {connect} from "react-redux";
import { selectorShipsOnField } from "../../store/selectors/Selectors-Cell";
import {Cell} from "./Cell"

function increaseAction()  {
    return {type: "increase"};
}
//const tryShotAction = {type: "toShot", celll: 0}

function getShot(numberCell) {
    return {
        type: "toShot",
        numCell: numberCell
    }
}


function mapStateToProps(state) {
    return {
        shipsOnField: selectorShipsOnField(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
       toShot: function(numCell) {
           return dispatch(getShot(numCell));
        },   
        increaseCount: function() {
            dispatch(increaseAction())
        }
       
    };
}

/*function mapDispatchToProps(dispatch) {
    return {
       toShot: function() {
           return dispatch(tryShotAction);
       },
    };
}*/


const CellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);
export  {CellContainer};