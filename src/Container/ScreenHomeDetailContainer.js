import {connect} from 'react-redux'
import screenHomeDetail from '../Screens/screenHomeDetail';
import screenOrder from '../Screens/ScreenOrder';
import { s_information} from "../Modules/home/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    s_information
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(screenHomeDetail,screenOrder)