import {connect} from 'react-redux'
import Home from '../Screens/screenHome';
import { template_img } from "../Modules/home/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    template_img,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)