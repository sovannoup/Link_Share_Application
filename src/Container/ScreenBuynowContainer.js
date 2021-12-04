import {connect} from 'react-redux'
import Buynow from '../Screens/screenBuynow';
import { g_detialImg } from "../Modules/home/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    g_detialImg
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Buynow)