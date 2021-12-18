import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import { GET_BOUGHT_TEMPLATE, SAVE_PREVIEW } from "./reducer";
import normalize from "../../Utils/normiliseServerResponce";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { object } from "prop-types";

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
    var body = [];
    var success_ = false;
    var dataError = {};
    var dataRes = {};
    8;
    var authDataString = yield AsyncStorage.getItem("@loginToken");
    const authData = yield JSON.parse(authDataString);
    for (var key in payload) {
      var eachKeyObj = {};
      if (
        key === "toSlideImg" ||
        key === "toDetailTxt" ||
        key === "toImgTxt" ||
        key === "toProductImg"
      ) {
        var eachKeyObj = [];
        for (var child in payload[key]) {
          var obj = {};
          for (var keyInArray in payload[key][child]) {
            if (keyInArray === "slideImg" || keyInArray === "image") {
              console.log("data: ", payload[key][child][keyInArray]);
              Object.assign(obj, {
                [keyInArray]: payload[key][child][keyInArray].path.substring(
                  payload[key][child][keyInArray].path.lastIndexOf("/") + 1
                ),
                type: payload[key][child][keyInArray].mime,
                // data: String(RNFetchBlob.wrap(payload[key][keyInArray].path)),
              });
            } else {
              Object.assign(obj, {
                [keyInArray]: String(payload[key][child][keyInArray]),
              });
            }
          }
          eachKeyObj.push(obj);
        }
        body.push(eachKeyObj);
        console.log("body", body);
      } else {
        for (var child in payload[key]) {
          console.log("child", child);
          if (isNaN(child)) {
            if (child === "logo" || child === "temImage") {
              Object.assign(eachKeyObj, {
                [child]: payload[key][child].path.substring(
                  payload[key][child].path.lastIndexOf("/") + 1
                ),
                type: payload[key][child].mime,
                // data: String(RNFetchBlob.wrap(payload[key][child].path)),
              });
            } else {
              Object.assign(eachKeyObj, {
                [child]: String(payload[key][child]),
              });
            }
          }
        }
        body.push(eachKeyObj);
      }
    }

    console.log("Body", body);

    yield RNFetchBlob.fetch(
      "POST",
      `${API_URL}myServer/product/saveEdited`,
      {
        Authorization: `Bearer ${authData.data.token}`,
        "Content-Type": "multipart/form-data",
      },
      body
    )
      .then((res) => {
        dataRes = {
          data: JSON.parse(nomalize(res)),
        };
        console.log("res", dataRes);
        success_ = true;
      })
      .catch((res) => {
        dataError = res;
        console.log("error", dataError);
      });
    if (success_) {
      yield put({
        type: success(SAVE_PREVIEW),
        payload: {
          r_saveAndPreview: dataRes,
        },
      });
    } else {
      yield put({
        type: error(SAVE_PREVIEW),
        payload: {
          errorUpload: JSON.parse(dataError),
        },
      });
    }
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
