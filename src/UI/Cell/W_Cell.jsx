import {connect} from "react-redux";
import Cell from "./Cell"

const increaseAction = {type: "increase"};
//const tryShotAction = {type: "toShot", celll: 0}

function getShot(numberCell) {
    return {
        type: "toShot",
        numCell: numberCell
    }
}


function mapStateToProps(state) {
    return {
        shipsOnField: state.ships,
    };
}

function mapDispatchToProps(dispatch) {
    return {
       toShot: function() {
           return dispatch(getShot());
        },   
        increaseCount: function() {
            return dispatch(increaseAction)
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


const W_Cell = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);
export default W_Cell;