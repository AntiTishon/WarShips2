import Field from './Field';
import {connect} from "react-redux";



function mapStateToProps(state) {
    return {
        countValue: state.count,
    };
}

const W_Field = connect(
    mapStateToProps,
    null
)(Field);
export default W_Field;