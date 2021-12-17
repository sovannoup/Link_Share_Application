import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import { GET_BOUGHT_TEMPLATE, SAVE_PREVIEW } from "./reducer";
import normalize from "../../Utils/normiliseServerResponce";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* TemplateWorker({ payload }) {
  try {
    const result_tem = yield call(axios.get, "myServer/template/detail");
    yield put({
      type: success(GET_BOUGHT_TEMPLATE),
      payload: {
        result_tem: normalize(result_tem),
      },
    });
  } catch (e) {
    yield put({
      type: error(GET_BOUGHT_TEMPLATE),
      payload: { error_get_tem: e },
    });
  }
}

export function* saveAndPreviewWorker({ payload }) {
  try {
    // var body = [];
    // var success_ = false;
    // var dataError = {};
    // var dataRes = {};
    // var authDataString = yield AsyncStorage.getItem("@loginToken");
    // const authData = yield JSON.parse(authDataString);
    // for (var key in payload) {
    //   for (var child in payload[key]) {
    //     //if string not num,
    //     console.log("hmmm");
    //     if (isNaN(child)) {
    //       if (child === "logo" || child === "temImage") {
    //         body.push({
    //           name: String(child),
    //           filename: payload[child].path.substring(
    //             payload[child].path.lastIndexOf("/") + 1
    //           ),
    //           type: payload[child].mime,
    //           data: String(RNFetchBlob.wrap(payload[child].path)),
    //         });
    //       } else {
    //         body.push({
    //           name: String(child),
    //           data: String(payload[key]),
    //         });
    //       }
    //     }
    //     console.log("hi", body);
    //   }
    // }
    // const r_saveAndPreview = yield call(
    //   axios.post,
    //   "myServer/template/detail",
    //   payload
    // );
    // yield put({
    //   type: success(SAVE_PREVIEW),
    //   payload: {
    //     r_saveAndPreview: normalize(r_saveAndPreview),
    //   },
    // });
  } catch (e) {
    yield put({
      type: error(SAVE_PREVIEW),
      payload: { error_saveAndPreview: e },
    });
  }
}

export function* editeSaga() {
  yield takeLatest(GET_BOUGHT_TEMPLATE, TemplateWorker);
  yield takeLatest(SAVE_PREVIEW, saveAndPreviewWorker);
}
