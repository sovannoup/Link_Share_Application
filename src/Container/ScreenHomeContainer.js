import { connect } from "react-redux";
import Home from "../Screens/screenHome";
import { f_get_home_tem } from "../Modules/home/reducer";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = {
  f_get_home_tem,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
