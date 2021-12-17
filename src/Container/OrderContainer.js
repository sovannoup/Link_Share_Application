import { connect } from "react-redux";

import screenOrder from "../Screens/ScreenOrder";
import { f_get_product } from "../Modules/home/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_get_product,
};
export default connect(mapStateToProps, mapDispatchToProps)(screenOrder);
