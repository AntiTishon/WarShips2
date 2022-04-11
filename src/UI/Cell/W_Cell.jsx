import {connect} from "react-redux";
import Cell from "./Cell"

const increaseAction = {type: "increase"};

function mapDispatchToProps(dispatch) {
    return {
       increaseCount: function() {
           return dispatch(increaseAction);
       },
    };
}


const W_Cell = connect(
    null,
    mapDispatchToProps
)(Cell);
export default W_Cell;