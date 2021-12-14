import { connect } from "react-redux";
import Buynow from "../Screens/screenBuynow";
import {} from "../Modules/home/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Buynow);
