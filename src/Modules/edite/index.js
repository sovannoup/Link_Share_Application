import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import { GET_BOUGHT_TEMPLATE } from "./reducer";
import normalize from "../../Utils/normiliseServerResponce";

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

export function* editeSaga() {
  yield takeLatest(GET_BOUGHT_TEMPLATE, TemplateWorker);
}
