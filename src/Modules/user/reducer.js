import { success, error, abort } from "redux-saga-requests";

export const LOGIN = "LOGIN";
export const CHECK_PHONE = "CHECK_PHONE";
export const REGISTER = "REGISTER";

export const f_login = (payload) => ({
  type: LOGIN,
  payload,
});
export const f_register = (payload) => ({
  type: REGISTER,
  payload,
});
export const f_checkphone = (payload) => ({
  type: CHECK_PHONE,
  payload,
});

const initialState = {
  pending: false,
  error: false,
  user: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //LOGIN
    case LOGIN: {
      return { ...state, pending: true };
    }
    case success(LOGIN): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(LOGIN): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(LOGIN): {
      return { ...state, pending: false };
    }

    //REGISTER
    case REGISTER: {
      return { ...state, pending: true };
    }
    case success(REGISTER): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(REGISTER): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(REGISTER): {
      return { ...state, pending: false };
    }

    //CHECK_PHONE
    case CHECK_PHONE: {
      return { ...state, pending: true };
    }
    case success(CHECK_PHONE): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(CHECK_PHONE): {
      return { ...state, error: true, pending: false, ...action.payload };
    }
    case abort(CHECK_PHONE): {
      return { ...state, pending: false };
    }

    /**
     * DEFAULT_CASE
     */
    default:
      return state;
  }
};
export default userReducer;
