import { connect } from "react-redux";
import Register from "../Screens/screenRegister";
import { f_register } from "../Modules/user/reducer";

const mapDispatchToProps = {
  f_register,
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
