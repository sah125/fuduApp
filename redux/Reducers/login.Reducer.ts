import { Reducer } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Actions/login.Actions';
//import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Actions/login.actions';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default function loginReducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
}
