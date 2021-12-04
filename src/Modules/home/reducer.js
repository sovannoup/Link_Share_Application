import { success, error, abort } from "redux-saga-requests";

export const TEMPLATE_IMG = 'TEMPLATE_IMG';
export const HOME_ORDER = 'HOME_ORDER';
export const HOME_IMG_DETIAL = 'HOME_IMG_DETIAL';
export const BOUGHT = 'BOUGHT';



export const template_img = (payload) =>({
    type: TEMPLATE_IMG,payload
});
export const s_information = (payload) =>({
    type: HOME_ORDER,payload
});
export const g_detialImg = (payload) =>({
    type: HOME_IMG_DETIAL,payload
});
export const g_bought = (payload) =>({
    type: BOUGHT,payload
});

const initialState = {
    pending: false,
    error: false,
    user:true
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
    //TEST

            //TEMPLTE IMG
            case TEMPLATE_IMG:{
                return{...state,pending:true};
                }
                case success(TEMPLATE_IMG):{
                    return{
                        ...state,
                        ...action.payload,
                        pending:false};
                }
                case error(TEMPLATE_IMG):{
                    return{...state,
                        error:true,
                        pending:false,
                        ...action.payload
                    };
                }
                case abort(TEMPLATE_IMG):{
                    return{...state,pending:false};
                }
                //HOME-ORDER
                
            case HOME_ORDER:{
                return{...state,pending:true};
                }
                case success(HOME_ORDER):{
                    return{
                        ...state,
                        ...action.payload,
                        pending:false};
                }
                case error(HOME_ORDER):{
                    return{...state,
                        error:true,
                        pending:false,
                        ...action.payload
                    };
                }
                case abort(HOME_ORDER):{
                    return{...state,pending:false};
                }
    //HOME_DETIALIMG
    case HOME_IMG_DETIAL:{
        return{...state,pending:true};
        }
        case success(HOME_IMG_DETIAL):{
            return{
                ...state,
                ...action.payload,
                pending:false};
        }
        case error(HOME_IMG_DETIAL):{
            return{...state,
                error:true,
                pending:false,
                ...action.payload
            };
        }
        case abort(HOME_IMG_DETIAL):{
            return{...state,pending:false};
        }


        //BOUGHT
    case BOUGHT:{
        return{...state,pending:true};
        }
        case success(BOUGHT):{
            return{
                ...state,
                ...action.payload,
                pending:false};
        }
        case error(BOUGHT):{
            return{...state,
                error:true,
                pending:false,
                ...action.payload
            };
        }
        case abort(BOUGHT):{
            return{...state,pending:false};
        }
    

    /**
     * DEFAULT_CASE
     */
    default:
        return state;
    }
};
export default homeReducer;