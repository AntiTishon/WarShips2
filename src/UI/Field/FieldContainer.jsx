import {Field} from './Field';
import {connect} from "react-redux";
import { selectorCountShots } from '../../store/selectors/selectors-Field';



function mapStateToProps(state) {
    return {
        countValue: selectorCountShots(state),
    };
}

const FieldContainer = connect(
    mapStateToProps,
    null
)(Field);
export {FieldContainer};