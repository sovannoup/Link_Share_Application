import appReducer from "../Modules/app/reducer";
import userReducer from "../Modules/user/reducer";
import homeReducer from "../Modules/home/reducer";
import editeReducer from "../Modules/edite/reducer";
export default {
  app: appReducer,
  user: userReducer,
  home: homeReducer,
  edit: editeReducer,
};
