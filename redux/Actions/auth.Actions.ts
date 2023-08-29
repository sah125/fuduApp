import { Action } from "redux";
import { ILogin } from "../../core/login";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import instance from "../../axios/axios-instance";

export interface LoginRequestAction extends Action<"LOGIN_REQUEST"> {
  payload: ILogin;
}

export interface LoginSuccessAction extends Action<"LOGIN_SUCCESS"> {
  payload: {
    user: any;
  };
}

export interface LoginFailureAction extends Action<"LOGIN_FAILURE"> {
  payload: {
    error: string;
  };
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

export const loginRequest = (credentials: ILogin): LoginRequestAction => ({
  type: "LOGIN_REQUEST",
  payload: credentials,
});

export const loginSuccess = (user: any): LoginSuccessAction => ({
  type: "LOGIN_SUCCESS",
  payload: { user },
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: "LOGIN_FAILURE",
  payload: { error },
});

export const login = (
  credentials: ILogin
): ThunkAction<void, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(loginRequest(credentials));
    try {
      // Make a POST request to your login API endpoint
      const response = await instance.post("/Auth/login", credentials);

      // Assuming the API response contains the user data
      const user: any = response.data;

      dispatch(loginSuccess(user));
    } catch (error: any) {
      console.log(error.message)
      dispatch(loginFailure(error.message));
    }
  };
};
