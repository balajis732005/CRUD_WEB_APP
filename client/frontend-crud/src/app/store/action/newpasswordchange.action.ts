import { createAction, props } from "@ngrx/store";
import { NewPasswordChangeModel } from "src/app/models/passwordchange-model";

export const newPasswordChange = createAction('newPasswordChange',props<{newPasswordChangeData : NewPasswordChangeModel}>());

export const newPasswordChangeSuccess = createAction('newPasswordChangeSuccess',props<{isNewPassword : boolean}>());

export const newPasswordChangeFail = createAction('newPasswordChangeFail',props<{errorrmessage : string}>());