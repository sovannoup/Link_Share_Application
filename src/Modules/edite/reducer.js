import { success, error, abort } from "redux-saga-requests";

export const GET_BOUGHT_TEMPLATE = "GET_BOUGHT_TEMPLATE";
export const SAVE_PREVIEW = "SAVE_PREVIEW";
export const GET_EDITED_PRODUCT = "GET_EDITED_PRODUCT";

export const f_getB_template = (payload) => ({
  type: GET_BOUGHT_TEMPLATE,
  payload,
});
export const f_saveAndPreview = (payload) => ({
  type: SAVE_PREVIEW,
  payload,
});
export const f_get_edited_product = (payload) => ({
  type: GET_EDITED_PRODUCT,
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
    //SAVE_PREVIEW
    case SAVE_PREVIEW: {
      return { ...state, pending: true };
    }
    case success(SAVE_PREVIEW): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(SAVE_PREVIEW): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(SAVE_PREVIEW): {
      return { ...state, pending: false };
    }

    //GET_EDITED_PRODUCT
    case GET_EDITED_PRODUCT: {
      return { ...state, pending: true };
    }
    case success(GET_EDITED_PRODUCT): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(GET_EDITED_PRODUCT): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(GET_EDITED_PRODUCT): {
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
