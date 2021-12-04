import { all } from "redux-saga/effects";
import { appSaga } from "../Modules/app";
/* import {loginSaga} from "../Modules/login"; */
import { userSaga } from "../Modules/user/index";
import { homeSaga } from "../Modules/home/index";
import { editeSaga } from "../Modules/edite/index";

const sagas = [
  appSaga(),
  /*  loginSaga(), */
  userSaga(),
  homeSaga(),
  editeSaga(),
];

export default function* () {
  yield all(sagas);
}
