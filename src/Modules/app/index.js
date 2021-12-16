import { takeLatest, put, call } from "redux-saga/effects";
import { APP_INIT } from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosDefault from "axios";
import NavigationService from "../../Service/navigationService";
import { NAV_TYPES } from "../../Navigation/navTypes";
import { SET_APP_LOCALE } from "./reducer";
import { error, success } from "redux-saga-requests";

import { API_URL } from "./config";
export const axios = axiosDefault.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      console.log("message", error);
      /* if (
        error.response &&
        error.response.status === 401 &&
        error.response.config.url !== `${baseURL}/user/logout`
      ) {
        // store.dispatch(userLogout());
      }     */
      return Promise.reject(error.response);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

function* startupWorker() {
  var authDataString = yield AsyncStorage.getItem("@loginToken");
  // console.log("hi", authDataString);
  const authData = yield JSON.parse(authDataString);
  if (authDataString && authData.token) {
    yield (axios.defaults.headers.common = {
      Authorization: `Bearer ${authData.token}`,
    });
    yield NavigationService.reset(NAV_TYPES.CORE);
  } else {
    // yield NavigationService.reset(NAV_TYPES.INTRO);
    yield NavigationService.navigate(NAV_TYPES.INTRO);
    console.log("error");
  }
}

export function* appSaga() {
  yield takeLatest(APP_INIT, startupWorker);
}
