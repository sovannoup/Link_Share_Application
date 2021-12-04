import {connect} from 'react-redux'
import Setting from '../Screens/Setting';
//import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {

}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Setting)