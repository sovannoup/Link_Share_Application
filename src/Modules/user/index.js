import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import normalize from "../../Utils/normiliseServerResponce";
import { REGISTER, LOGIN } from "./reducer";

export function* LoginWorker({ payload }) {
  try {
    const r_login = yield call(axios.post, "myServer/login", payload);
    console.log("Processing Login....!", normalize(r_login));
    // yield (axios.defaults.headers.common = {
    //   Authorization: `Bearer ${result_getSms.data.token}`,
    // });
    yield put({
      type: success(LOGIN),
      payload: {
        r_login: normalize(r_login),
      },
    });
  } catch (e) {
    const parseError = yield JSON.parse(JSON.stringify(e));
    const message = parseError.data || parseError.response;
    console.log("Error Login", message);
    yield put({
      type: error(LOGIN),
      payload: { error_template: e },
    });
  }
}

export function* RegisterWorker({ payload }) {
  try {
    console.log("register payload", payload);
    const r_register = yield call(axios.post, "/myServer/register", payload);
    console.log("Processing Signup....!", r_register);
    yield put({
      type: success(REGISTER),
      payload: {
        r_register: normalize(r_register),
      },
    });
  } catch (e) {
    // const parseError = yield JSON.parse(JSON.stringify(e));
    // const message = parseError.data || parseError.response;
    // console.log("Error Signup", message);
    console.log("why why why", e);
    yield put({
      type: error(REGISTER),
      payload: { error_template: e },
    });
  }
}

export function* userSaga() {
  yield takeLatest(REGISTER, RegisterWorker);
  yield takeLatest(LOGIN, LoginWorker);
}
