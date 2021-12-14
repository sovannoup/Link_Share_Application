import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import normalize from "../../Utils/normiliseServerResponce";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER, LOGIN, CHECK_PHONE } from "./reducer";

export function* LoginWorker({ payload }) {
  try {
    const r_login = yield call(axios.post, "myServer/login", payload);
    console.log("Processing Login....!", r_login.data.token);
    yield (axios.defaults.headers.common = {
      Authorization: `Bearer ${r_login.data.token}`,
    });
    AsyncStorage.setItem("@loginToken", JSON.stringify(r_login.data));
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
    const r_register = yield call(axios.post, "/myServer/register");
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

export function* checkPhoneWorker({ payload }) {
  try {
    const r_checkphone = yield call(
      axios.post,
      "/myServer/login/check",
      payload
    );
    if (payload.type === "login") {
      yield put({
        type: success(CHECK_PHONE),
        payload: {
          r_login_checkphone: normalize(r_checkphone),
        },
      });
    } else {
      yield put({
        type: success(CHECK_PHONE),
        payload: {
          r_checkphone: normalize(r_checkphone),
        },
      });
    }
  } catch (e) {
    // const parseError = yield JSON.parse(JSON.stringify(e));
    // const message = parseError.data || parseError.response;
    yield put({
      type: error(CHECK_PHONE),
      payload: { r_noPhone: e },
    });
  }
}

export function* userSaga() {
  yield takeLatest(REGISTER, RegisterWorker);
  yield takeLatest(LOGIN, LoginWorker);
  yield takeLatest(CHECK_PHONE, checkPhoneWorker);
}
