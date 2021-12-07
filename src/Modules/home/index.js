import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import { GET_TEMPLATE, HOME_ORDER, HOME_IMG_DETIAL, BOUGHT } from "./reducer";

/* export function* language({payload}){
   console.log(payload)
} */

/* export function* languageWorker({payload}) {
    try {
      console.log('verifying sms',payload)
        const language = yield call(axios.post,"languages",payload);
        yield put({
          type: success(language),
          payload: {
            language: language.data
          }
        });
    } catch (e) {
      yield put({
        type: error(language),
        payload:{error_language:e}
      });
    }
  } */

export function* GetTemplateWorker({ payload }) {
  console.log("image___________", payload);
  try {
    const templatImg = yield call(axios.get, "templates", payload);
    // AsyncStorage.setItem('@SmsToken', language.data.results.smsCode);
    yield put({
      type: success(GET_TEMPLATE),
      payload: {
        templatImg: templatImg.data,
      },
    });
  } catch (e) {
    yield put({
      type: error(GET_TEMPLATE),
      payload: { error_template: e },
    });
  }
}

export function* infoOrderWorker({ payload }) {
  console.log("infor>>>>>>>>>>>>>>>>", payload);
  try {
    const info = yield call(axios.post, "/orderTemplates", payload);
    // AsyncStorage.setItem('@SmsToken', language.data.results.smsCode);
    yield put({
      type: success(HOME_ORDER),
      payload: {
        info: info.data,
      },
    });
  } catch (e) {
    yield put({
      type: error(HOME_ORDER),
      payload: { error_info: e },
    });
  }
}

export function* imgDetialWorker({ payload }) {
  //console.log('infor>>>>>>>>>>>>>>>>', payload)
  try {
    const imgDtial = yield call(axios.get, "templates", payload);
    // AsyncStorage.setItem('@SmsToken', language.data.results.smsCode);
    yield put({
      type: success(HOME_IMG_DETIAL),
      payload: {
        imgDtial: imgDtial.data,
      },
    });
  } catch (e) {
    yield put({
      type: error(HOME_IMG_DETIAL),
      payload: { error_imgDtial: e },
    });
  }
}

export function* boughtWorker({ payload }) {
  console.log("<<<<<<<<<<>>>>>>>>", payload);
  try {
    const login = yield call(axios.post, "user_login", {
      phonenumber: 85570594606,
    });
    console.log("loging-_________-", login.data.token);
    if (login.data.token) {
      yield (axios.defaults.headers.common = {
        Authorization: `Bearer ${login.data.token}`,
      });
    }
    const bought = yield call(axios.get, `templates-bought/${payload}`);
    console.log("bought==========----->>>>>>>>", bought);
    // AsyncStorage.setItem('@SmsToken', language.data.results.smsCode);
    yield put({
      type: success(BOUGHT),
      payload: {
        bought: bought.data,
      },
    });
  } catch (e) {
    const parseError = yield JSON.parse(JSON.stringify(e));
    //const message = parseError.data || parseError.response;
    console.log("Get Transition error", parseError);

    yield put({
      type: error(BOUGHT),
      payload: { error_bought: e },
    });
  }
}

export function* homeSaga() {
  yield takeLatest(GET_TEMPLATE, GetTemplateWorker);
  yield takeLatest(HOME_ORDER, infoOrderWorker);
  yield takeLatest(HOME_IMG_DETIAL, imgDetialWorker);
  yield takeLatest(BOUGHT, boughtWorker);
}
