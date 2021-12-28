import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import {
  GET_BOUGHT_TEMPLATE,
  SAVE_PREVIEW,
  GET_EDITED_PRODUCT,
  GET_DETAIL_PRO,
  UPDATE_PRODUCT,
} from "./reducer";
import normalize from "../../Utils/normiliseServerResponce";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { object, string } from "prop-types";
import { API_URL } from "../app/config";
import RNFetchBlob from "react-native-fetch-blob";

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

export function* getEditedProductWorker({ payload }) {
  try {
    const r_getEdited = yield call(axios.get, "myServer/product/edited");
    yield put({
      type: success(GET_EDITED_PRODUCT),
      payload: {
        r_getEdited: normalize(r_getEdited),
      },
    });
  } catch (e) {
    yield put({
      type: error(GET_EDITED_PRODUCT),
      payload: { error_get_tem: e },
    });
  }
}

export function* saveAndPreviewWorker({ payload }) {
  try {
    var body = [];
    var konBody = [];
    var sec = {};
    var innerArr = [];
    var success_ = false;
    var dataError = {};
    var dataRes = {};
    var authDataString = yield AsyncStorage.getItem("@loginToken");
    const authData = yield JSON.parse(authDataString);
    for (var key in payload) {
      if (key === "toImageSlider" || key === "toOtherImage") {
        for (var vari in payload[key]) {
          // console.log(payload[key][vari]["imageSlider"]);
          body.push({
            name: key,
            filename: String(payload[key][vari]["id"]),
            //  payload[key][vari]["image"].path.substring(
            //   payload[key][vari]["image"].path.lastIndexOf("/") + 1
            // ),
            type: payload[key][vari]["image"].mime,
            data: String(RNFetchBlob.wrap(payload[key][vari]["image"].path)),
            // id: payload[key][vari]["id"],
          });
        }
      } else if (key.startsWith("image")) {
        body.push({
          name: String(key),
          filename: payload[key].path.substring(
            payload[key].path.lastIndexOf("/") + 1
          ),
          type: payload[key].mime,
          data: String(RNFetchBlob.wrap(payload[key].path)),
        });
      } else {
        body.push({
          name: String(key),
          data: String(payload[key]),
        });
      }
    }

    console.log("Body", body);
    // console.log("auth", authData.token);
    yield RNFetchBlob.fetch(
      "POST",
      `${API_URL}/myServer/product/saveEdited`,
      {
        Authorization: `Bearer ${authData.token}`,
        "Content-Type": "multipart/form-data",
        Boundary: "form-data",
      },
      body
    )
      .then((res) => {
        console.log(nomalize(res));
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

export function* getDetailProWorker({ payload }) {
  try {
    const r_getProDetail = yield call(
      axios.post,
      "myServer/product/seeEditedDetail",
      payload
    );
    yield put({
      type: success(GET_DETAIL_PRO),
      payload: {
        r_getProDetail: normalize(r_getProDetail),
      },
    });
  } catch (e) {
    yield put({
      type: error(GET_DETAIL_PRO),
      payload: { error_template: e },
    });
  }
}

export function* updateProductWorker({ payload }) {
  try {
    console.log("hiiiiiiiiiiii", payload);
    var body = [];
    var konBody = [];
    var sec = {};
    var innerArr = [];
    var success_ = false;
    var dataError = {};
    var dataRes = {};
    var authDataString = yield AsyncStorage.getItem("@loginToken");
    const authData = yield JSON.parse(authDataString);
    for (var key in payload) {
      console.log("key  is : ", key);
      if (key === "toImageSlider" || key === "toOtherImage") {
        for (var vari in payload[key]) {
          body.push({
            name: key,
            filename: String(payload[key][vari]["id"]),
            type: payload[key][vari]["image"].mime,
            data: String(RNFetchBlob.wrap(payload[key][vari]["image"].path)),
            // id: payload[key][vari]["id"],
          });
        }
      } else if (key.startsWith("image")) {
        if (payload[key].startsWith("http")) {
          body.push({
            name: String(key),
            data: String(payload[key]),
          });
        } else {
          body.push({
            name: String(key),
            filename: payload[key].path.substring(
              payload[key].path.lastIndexOf("/") + 1
            ),
            type: payload[key].mime,
            data: String(RNFetchBlob.wrap(payload[key].path)),
          });
        }
      } else {
        body.push({
          name: String(key),
          data: String(payload[key]),
        });
      }
      console.log("Body", body);
    }

    console.log("Body", body);
    // console.log("auth", authData.token);
    yield RNFetchBlob.fetch(
      "POST",
      `${API_URL}/myServer/productUpdate`,
      {
        Authorization: `Bearer ${authData.token}`,
        "Content-Type": "multipart/form-data",
        Boundary: "form-data",
      },
      body
    )
      .then((res) => {
        console.log(nomalize(res));
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
        type: success(UPDATE_PRODUCT),
        payload: {
          r_updateProduct: dataRes,
        },
      });
    } else {
      yield put({
        type: error(UPDATE_PRODUCT),
        payload: {
          error_update_product: JSON.parse(dataError),
        },
      });
    }
  } catch (e) {
    yield put({
      type: error(UPDATE_PRODUCT),
      payload: { error_update_pro: e },
    });
  }
}

export function* editeSaga() {
  yield takeLatest(GET_BOUGHT_TEMPLATE, TemplateWorker);
  yield takeLatest(SAVE_PREVIEW, saveAndPreviewWorker);
  yield takeLatest(GET_EDITED_PRODUCT, getEditedProductWorker);
  yield takeLatest(GET_DETAIL_PRO, getDetailProWorker);
  yield takeLatest(UPDATE_PRODUCT, updateProductWorker);
}
