import { connect } from "react-redux";
import ScreenLogin from "../Screens/screenLogin";
import { g_language, f_login } from "../Modules/user/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  g_language,
  f_login,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);
