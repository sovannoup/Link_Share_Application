import { connect } from "react-redux";
import Register from "../Screens/screenRegister";
import { f_checkphone } from "../Modules/user/reducer";

const mapDispatchToProps = {
  f_checkphone,
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
