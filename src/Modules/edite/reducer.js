import { success, error, abort } from "redux-saga-requests";

export const GET_BOUGHT_TEMPLATE = "GET_BOUGHT_TEMPLATE";

export const f_getB_template = (payload) => ({
  type: GET_BOUGHT_TEMPLATE,
  payload,
});
const initialState = {
  pending: false,
  error: false,
  user: true,
};

const editeReducer = (state = initialState, action) => {
  switch (action.type) {
    //TEST

    //GET_BOUGHT_TEMPLATE
    case GET_BOUGHT_TEMPLATE: {
      return { ...state, pending: true };
    }
    case success(GET_BOUGHT_TEMPLATE): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(GET_BOUGHT_TEMPLATE): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(GET_BOUGHT_TEMPLATE): {
      return { ...state, pending: false };
    }

    /**
     * DEFAULT_CASE
     */
    default:
      return state;
  }
};
export default editeReducer;
