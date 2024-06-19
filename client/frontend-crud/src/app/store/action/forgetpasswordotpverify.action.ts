import { createAction, props } from "@ngrx/store";
import { ForgetPasswordOtpVerifyModel } from "src/app/models/forgetpasswordotpverify-model";

export const forgetPasswordOtpVerify = createAction('forgetPasswordOtpVerify',props<{forgetPasswordOtpVerifyData : ForgetPasswordOtpVerifyModel}>());

export const forgetPasswordOtpVerifySuccess = createAction('forgetPasswordOtpVerifySuccess',props<{isNewPassword : boolean}>());

export const forgetPasswordOtpVerifyFail = createAction('forgetPasswordOtpVerifyFail',props<{errorrmessage : string}>());