import { connect } from "react-redux";
import StartUp from "../Screens/screenStartUp";
import { startupWorker } from "../Modules/app/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  startupWorker,
};
export default connect(mapStateToProps, mapDispatchToProps)(StartUp);
