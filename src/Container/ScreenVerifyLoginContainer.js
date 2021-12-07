import { connect } from "react-redux";
import VerifyLogin from "../Screens/screenVerifyLogin";
import { f_login, f_register } from "../Modules/user/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_login,
  f_register,
};
export default connect(mapStateToProps, mapDispatchToProps)(VerifyLogin);
