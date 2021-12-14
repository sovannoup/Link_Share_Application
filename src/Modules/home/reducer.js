import { success, error, abort } from "redux-saga-requests";

export const GET_HOME_TEM = "GET_HOME_TEM";
export const ORDER_TEMPLATE = "ORDER_TEMPLATE";

export const f_get_home_tem = (payload) => ({
  type: GET_HOME_TEM,
  payload,
});
export const f_orderTemplate = (payload) => ({
  type: ORDER_TEMPLATE,
  payload,
});
const initialState = {
  pending: false,
  error: false,
  user: true,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    //TEST

    //TEMPLTE IMG
    case GET_HOME_TEM: {
      return { ...state, pending: true };
    }
    case success(GET_HOME_TEM): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(GET_HOME_TEM): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(GET_HOME_TEM): {
      return { ...state, pending: false };
    }

    //Start Order
    case ORDER_TEMPLATE: {
      return { ...state, pending: true };
    }
    case success(ORDER_TEMPLATE): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(ORDER_TEMPLATE): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(ORDER_TEMPLATE): {
      return { ...state, pending: false };
    }

    /**
     * DEFAULT_CASE
     */
    default:
      return state;
  }
};
export default homeReducer;
