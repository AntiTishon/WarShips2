import {connect} from "react-redux";
import { selectorCountShots } from "../../store/selectors/selectors-Field";
import {NumShots} from "./NumShots";



function mapStateToProps(state) {
    return {
        countValue: selectorCountShots(state) ,
    };
}

const NumShortsContainer = connect(
    mapStateToProps,
    null
)(NumShots);
export {NumShortsContainer};
 