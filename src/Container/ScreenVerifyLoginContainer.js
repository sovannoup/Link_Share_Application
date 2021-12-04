import {connect} from 'react-redux'
import VerifyLogin from '../Screens/screenVerifyLogin';
//import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {

}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VerifyLogin)