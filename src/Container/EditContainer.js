/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import ScreenEdite from '../Screens/ScreenEdite';
import {g_bought } from "../Modules/home/reducer";
const mapStateToProps = state => ({
    ...state

})
const mapDispatchToProps = {
    g_bought,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenEdite)