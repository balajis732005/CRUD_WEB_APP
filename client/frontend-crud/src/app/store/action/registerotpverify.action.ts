import { createAction, props } from "@ngrx/store";
import { RegisterOtpVerifyModel } from "src/app/models/registerotpverify-model";

export const registerOtpVerify = createAction('registerOtpVerify',props<{enterotpverifymodel : RegisterOtpVerifyModel}>());

export const registerOtpVerifySuccess = createAction('registerOtpVerifySuccess',props<{isApiSuccess : boolean}>());

export const registerOtpVerifyFail =  createAction('registerOtpVerifyFail',props<{errorrmesage : string}>());