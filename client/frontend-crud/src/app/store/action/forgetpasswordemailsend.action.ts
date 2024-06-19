import { createAction, props } from "@ngrx/store";
import { OnlyEmailModel } from "src/app/models/emailenter-model";

export const forgetPasswordEmailSend = createAction('forgetPasswordEmailSend',props<{forgetpasswordEMailData : OnlyEmailModel}>());

export const forgetPasswordEmailSendSuccess = createAction('forgetPasswordEmailSendSuccess',props<{isNewPassword : boolean}>());

export const forgetPasswordEmailSendFail = createAction('forgetPasswordEmailSendFail',props<{errorrmessage : string}>());