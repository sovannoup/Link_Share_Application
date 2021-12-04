import {connect} from 'react-redux'
import StartUp from '../Screens/screenStartUp';
//import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartUp)