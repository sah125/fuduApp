import { Action } from "redux";
import { ILogin } from "../../core/login";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import instance from "../../axios/axios-instance";
import { ISignup } from "../../core/signup";
//import { IVerify } from "../../core/verify";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

export interface ResetPasswordRequestAction
  extends Action<typeof RESET_PASSWORD_REQUEST> { }
export interface ResetPasswordSuccessAction
  extends Action<typeof RESET_PASSWORD_SUCCESS> { }
export interface ResetPasswordFailureAction
  extends Action<typeof RESET_PASSWORD_FAILURE> {
  payload: {
    error: string; // Error message
  };
}

export interface ForgotPasswordRequestAction
  extends Action<typeof FORGOT_PASSWORD_REQUEST> { }

export interface ForgotPasswordSuccessAction
  extends Action<typeof FORGOT_PASSWORD_SUCCESS> { }

export interface ForgotPasswordFailureAction
  extends Action<typeof FORGOT_PASSWORD_FAILURE> {
  payload: {
    error: string;
  };
}

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

export interface SignupRequestAction extends Action<"SIGNUP_REQUEST"> {
  payload: ISignup;
}

export interface SignupSuccessAction extends Action<"SIGNUP_SUCCESS"> {
  payload: {
    user: any;
  };
}

export interface SignupFailureAction extends Action<"SIGNUP_FAILURE"> {
  payload: {
    error: string;
  };
}

//
export interface VerifyOtpRequestAction extends Action<"VERIFY_OTP_REQUEST"> {
  payload: string;
}

export interface VerifyOtpSuccessAction extends Action<"VERIFY_OTP_SUCCESS"> {
  payload: {
    user: any;
  };
}

export interface VerifyOtpFailureAction extends Action<"VERIFY_OTP_FAILURE"> {
  payload: {
    error: string;
  };
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | ForgotPasswordRequestAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordFailureAction
  | ResetPasswordFailureAction
  | ResetPasswordRequestAction
  | ResetPasswordSuccessAction
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction
  | VerifyOtpRequestAction
  | VerifyOtpSuccessAction
  | VerifyOtpFailureAction;

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

export const verifyOtpRequest = (opt: string): VerifyOtpRequestAction => ({
  type: "VERIFY_OTP_REQUEST",
  payload: opt,
});

export const verifyOtpSuccess = (user: any): VerifyOtpSuccessAction => ({
  type: "VERIFY_OTP_SUCCESS",
  payload: { user },
});

export const verifyOtpFailure = (error: string): VerifyOtpFailureAction => ({
  type: "VERIFY_OTP_FAILURE",
  payload: { error },
});

export const forgotPasswordRequest = (): ForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export const forgotPasswordSuccess = (): ForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = (
  error: string
): ForgotPasswordFailureAction => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: { error },
});

export const resetPasswordRequest = (): ResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (): ResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = (
  error: string
): ResetPasswordFailureAction => ({
  type: RESET_PASSWORD_FAILURE,
  payload: { error },
});

// Thunk for "forgot password" functionality
export const forgotPassword = (
  email: string
): ThunkAction<void, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(forgotPasswordRequest());
    try {
      await instance.post("/Auth/forgotPassword", { email });
      dispatch(forgotPasswordSuccess());
    } catch (error: any) {
      console.log(error.message);
      dispatch(forgotPasswordFailure(error.message));
    }
  };
};

export const resetPassword = (
  password: string,
  confirmPassword: string
): ThunkAction<void, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(resetPasswordRequest);

    if (password !== confirmPassword) {
      dispatch(resetPasswordFailure("Passwords do not match."));
      return;
    }
    try {
      // API request to reset password
      await instance.post("/Auth/resetPassword", { password }); // Adjust the API endpoint

      dispatch(resetPasswordSuccess);
    } catch (error: any) {
      console.log(error.message);
      dispatch(resetPasswordFailure(error.message));
    }
  };
};

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
      console.log(error.message);
      dispatch(loginFailure(error.message));
    }
  };
};

export const signin = (
  credentials: ILogin
): ThunkAction<Promise<AuthAction>, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(loginRequest(credentials));
    try {
      // Make a POST request to your login API endpoint
      const response = await instance.post("/User/login", credentials);

      // Assuming the API response contains the user data
      const user: any = response.data;

      dispatch(loginSuccess(user));
      return loginSuccess(user); // Resolve with the success action
    } catch (error: any) {
      console.log(error.message);
      dispatch(loginFailure(error.message));
      return loginFailure(error.message); // Resolve with the failure action
    }
  };
};

export const register = (
  signupData: ISignup
): ThunkAction<Promise<AuthAction>, any, unknown, AuthAction> => {
  return async (dispatch) => {
    dispatch(signupRequest(signupData));
    try {
      // Make a POST request to your signup API endpoint
      const response = await instance.post("/User/register", signupData);

      // Assuming the API response contains the user data
      const user: any = response.data?.tempUserData;

      dispatch(signupSuccess(user));
      return signupSuccess(user);
    } catch (error: any) {
      debugger;
      dispatch(signupFailure(JSON.parse(error.request._response)));
      return signupFailure(JSON.parse(error.request._response));
    }
  };
};
