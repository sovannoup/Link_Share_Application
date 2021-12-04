/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import ScreenEdite from '../component/Edited';
import { s_product_id,s_register } from "../Modules/edite/reducer";
const mapStateToProps = state => ({
    ...state

})
const mapDispatchToProps = {
    s_product_id,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenEdite)