import {connect} from 'react-redux'
import ConfirmRegister from '../Screens/screenConfirmRegister';
import { sms_comfirm} from "../Modules/user/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    sms_comfirm
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfirmRegister)