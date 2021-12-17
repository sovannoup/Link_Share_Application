import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import { GET_HOME_TEM, ORDER_TEMPLATE, ORDER_PRODUCT } from "./reducer";
import normalize from "../../Utils/normiliseServerResponce";

export function* GetHomeTemWorker({ payload }) {
  try {
    const tem_list = yield call(axios.get, "myServer/template/home", payload);
    yield put({
      type: success(GET_HOME_TEM),
      payload: {
        tem_list: normalize(tem_list),
      },
    });
  } catch (e) {
    yield put({
      type: error(GET_HOME_TEM),
      payload: { error_template: e },
    });
  }
}

export function* OrderTemplateWorker({ payload }) {
  try {
    console.log(payload);
    const result_order = yield call(
      axios.post,
      "myServer/template/order",
      payload
    );
    yield put({
      type: success(ORDER_TEMPLATE),
      payload: {
        result_order: normalize(result_order),
      },
    });
  } catch (e) {
    yield put({
      type: error(ORDER_TEMPLATE),
      payload: { error_template: e },
    });
  }
}

export function* OrderProductWorker({ payload }) {
  try {
    const r_orderPro = yield call(axios.get, "myServer/product/orderedProduct");
    yield put({
      type: success(ORDER_PRODUCT),
      payload: {
        r_orderPro: normalize(r_orderPro),
      },
    });
  } catch (e) {
    yield put({
      type: error(ORDER_PRODUCT),
      payload: { error_template: e },
    });
  }
}

export function* homeSaga() {
  yield takeLatest(GET_HOME_TEM, GetHomeTemWorker);
  yield takeLatest(ORDER_TEMPLATE, OrderTemplateWorker);
  yield takeLatest(ORDER_PRODUCT, OrderProductWorker);
}
