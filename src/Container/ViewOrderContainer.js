/* eslint-disable prettier/prettier */
import { connect } from "react-redux";
import ViewOrder from "../Screens/ScreenViewOrder";
import {
  f_accept_order,
  f_cancel_order,
  f_get_product,
} from "../Modules/home/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_accept_order,
  f_cancel_order,
  f_get_product,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
