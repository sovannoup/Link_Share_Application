import { connect } from "react-redux";
import EditeTemplate from "../Screens/editTemplete";
import { f_saveAndPreview } from "../Modules/edite/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = { f_saveAndPreview };
export default connect(mapStateToProps, mapDispatchToProps)(EditeTemplate);
