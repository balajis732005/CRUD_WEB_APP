import { createAction, props } from "@ngrx/store";
import { LoginModel } from "src/app/models/login-model";

export const authentication = createAction('authentication',props<{loginData : LoginModel}>());

export const authenticationSuccess = createAction('authenticationSuccess',props<{id : number, userName : string, userEmail : string, password : string}>());

export const authenticationFail = createAction('authenticationFail',props<{errorMessage : string}>())
