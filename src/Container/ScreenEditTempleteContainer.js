import { connect } from "react-redux";
import EditeTemplate from "../Screens/editTemplete";
import {
  f_saveAndPreview,
  f_get_edited_product,
} from "../Modules/edite/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = { f_saveAndPreview, f_get_edited_product };
export default connect(mapStateToProps, mapDispatchToProps)(EditeTemplate);
