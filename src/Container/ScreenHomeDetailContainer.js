import { connect } from "react-redux";
import screenHomeDetail from "../Screens/screenHomeDetail";
import screenOrder from "../Screens/ScreenOrder";
import { f_orderTemplate } from "../Modules/home/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_orderTemplate,
};
export default connect(mapStateToProps, mapDispatchToProps)(
  screenHomeDetail,
  screenOrder
);
