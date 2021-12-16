/* eslint-disable prettier/prettier */
import { connect } from "react-redux";
import ScreenEdite from "../Screens/ScreenEdite";
import { f_getB_template } from "../Modules/edite/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_getB_template,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenEdite);
