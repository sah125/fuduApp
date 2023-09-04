import { Action } from "redux";
import { ISignup } from "../../core/signup"; 
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import instance from "../../axios/axios-instance"; 

export interface SignupRequestAction extends Action<"SIGNUP_REQUEST"> {
  payload: ISignup;
}

export interface SignupSuccessAction extends Action<"SIGNUP_SUCCESS"> {
  payload: {
    user: any; // Update with your user data structure
  };
}

export interface SignupFailureAction extends Action<"SIGNUP_FAILURE"> {
  payload: {
    error: string;
  };
}

export type AuthAction =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction;

export const signupRequest = (signupData: ISignup): SignupRequestAction => ({
  type: "SIGNUP_REQUEST",
  payload: signupData,
});

export const signupSuccess = (user: any): SignupSuccessAction => ({
  type: "SIGNUP_SUCCESS",
  payload: { user },
});

export const signupFailure = (error: string): SignupFailureAction => ({
  type: "SIGNUP_FAILURE",
  payload: { error },
});

export const signup = (
  signupData: ISignup
): ThunkAction<void, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(signupRequest(signupData));
    try {
      // Make a POST request to your signup API endpoint
      const response = await instance.post("/Auth/signup", signupData);

      // Assuming the API response contains the user data
      const user: any = response.data;

      dispatch(signupSuccess(user));
    } catch (error: any) {
      console.log(error.message);
      dispatch(signupFailure(error.message));
    }
  };
};
