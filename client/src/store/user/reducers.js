import {
    LOGIN,
    LOGOUT,
    ONLOGIN,
    ONLOGOUT,
    STATLOGIN,
    GET_DATA,
    GET_ERROR,
    CREATE_EMP, 
    UPDATE_EMP, 
    DELETE_EMP,
    GET_PENDING,
    PENDING_SUCCESS,
    GET_IMAGE
    // MESSAGE_LOGIN
} from './actionTypes'

const initialState = {
    data: '' ,
    dataa: [],
    dataimg: [],
    loading: false,
    loginStatus: false,
    error: false
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                //...state,
                loading: false,
                loginStatus: true,
            }
        
        case LOGOUT: 
        return {
            loading: false,
            loginStatus: false
        }    


        case ONLOGIN:
            return {
               loginStatus : true,
               dataa: action.payload,

            }
        
        case ONLOGOUT: 
        return {
            loginStatus: false,
        }    

        case STATLOGIN: 
        return {
            loginStatus : action.payload,

        }

        case GET_DATA:
            return {
                ...state,
                dataa: action.payload,
                loading: false,
                loginStatus: true,
            }

        case GET_IMAGE:
            return {
                ...state,
                dataimg: action.payload,
                loading: false,
                loginStatus: true,
            }   

        case GET_ERROR:
          
            return {
                ...state,
               error: true,
                loading: false,
            }
          case GET_PENDING: 
            return {
                ...state,
                loading: true
            }  
            case PENDING_SUCCESS: 
            return {
                ...state,
                loading: false
            }    
        default:
            return state;
    }
}

export default reducers;