import Field from './Field';
import {connect} from "react-redux";



function mapStateToProps(state) {
    return {
        countValue: state.shots,
    };
}

const W_Field = connect(
    mapStateToProps,
    null
)(Field);
export default W_Field;