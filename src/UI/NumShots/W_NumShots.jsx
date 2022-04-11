import {connect} from "react-redux";
import NumShots from "./NumShots";



function mapStateToProps(state) {
    return {
        countValue: state.count,
    };
}

const W_NumShorts = connect(
    mapStateToProps,
    null
)(NumShots);
export default W_NumShorts;