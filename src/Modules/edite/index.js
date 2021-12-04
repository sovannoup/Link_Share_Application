import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import {axios} from "../app/index";
import nomalize from "../../Utils/normiliseServerResponce";
import {
    PRODUCT_ID,
} from './reducer'

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






  export function* ProductWorker({payload}) {
    console.log(':":":":":":":":":":"', payload)
    try {
        const   product_id = yield call(axios.post, "create-product",payload);
        console.log(':::::::::::::::::::::::',product_id)
        // AsyncStorage.setItem('@SmsToken', language.data.results.smsCode);
        yield put({
          type: success(PRODUCT_ID),
          payload: {
            product_id:product_id.data
          }
        });
    } catch (e) {
      yield put({
        type: error(PRODUCT_ID),
        payload:{error_product_id:e}
      });
    }
  }




export function* editeSaga(){
    yield takeLatest(PRODUCT_ID,ProductWorker);
    
}