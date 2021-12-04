import {connect} from 'react-redux'
import Save from '../Screens/save';
//import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Save)