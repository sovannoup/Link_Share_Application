import { success, error, abort } from "redux-saga-requests";

export const PRODUCT_ID = 'PRODUCT_ID';




export const s_product_id = (payload) =>({
    type: PRODUCT_ID,payload
});
const initialState = {
    pending: false,
    error: false,
    user:true
};

const editeReducer = (state = initialState, action) => {
    switch (action.type) {
    //TEST

            //PRODUCT_ID
            case PRODUCT_ID:{
                return{...state,pending:true};
                }
                case success(PRODUCT_ID):{
                    return{
                        ...state,
                        ...action.payload,
                        pending:false};
                }
                case error(PRODUCT_ID):{
                    return{...state,
                        error:true,
                        pending:false,
                        ...action.payload
                    };
                }
                case abort(PRODUCT_ID):{
                    return{...state,pending:false};
                }

 
    

    /**
     * DEFAULT_CASE
     */
    default:
        return state;
    }
};
export default editeReducer;