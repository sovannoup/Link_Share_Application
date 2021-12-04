import {connect} from 'react-redux'
import EditeTemplate from '../Screens/editTemplete';
//import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditeTemplate)