import { connect } from "react-redux";
import ScreenLogin from "../Screens/screenLogin";
import { g_language, f_login, f_checkphone } from "../Modules/user/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  g_language,
  f_login,
  f_checkphone,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);
