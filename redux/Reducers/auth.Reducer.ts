import { Reducer } from 'redux';
import { AuthAction } from '../Actions/auth.Actions';


interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  error: string | null;
  forgotPasswordLoading: boolean;
  forgotPasswordError: string | null;
  resetPasswordLoading : boolean;
  resetPasswordError: string | null;
  
}



const initialState: AuthState = {
 
  isLoggedIn: false,
  user: null,
  error: null,
  forgotPasswordLoading: false,
  forgotPasswordError: '',
  resetPasswordLoading: false,
  resetPasswordError: '',
  
 
};

//type AuthActionTypes = "LOGIN_REQUEST" | "LOGIN_SUCCESS" | "LOGIN_FAILURE" | "FORGOT_PASSWORD_REQUEST" | "FORGOT_PASSWORD_SUCCESS" | "FORGOT_PASSWORD_FAILURE";

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload.error,
      };

      case 'FORGOT_PASSWORD_REQUEST':
        return {
          ...state,
          forgotPasswordLoading: true,
          forgotPasswordError: '',
        };
      case 'FORGOT_PASSWORD_SUCCESS':
        return {
          ...state,
          forgotPasswordLoading: false,
        };
      case 'FORGOT_PASSWORD_FAILURE':
        return {
          ...state,
          forgotPasswordLoading: false,
          forgotPasswordError: action.payload.error,
        };
   
        case 'RESET_PASSWORD_REQUEST':
          return {
            ...state,
            resetPasswordLoading: false,
            resetPasswordError: '',
          };
        case 'RESET_PASSWORD_SUCCESS': 
        
          return {
          ...state,
          resetPasswordLoading: false,
        } ;
        case 'RESET_PASSWORD_FAILURE':
        return {
          ...state,
            resetPasswordLoading: false,
            resetPasswordError: action.payload.error,
        };
    default:
      return state;
  }

  

  
};

export default authReducer;
