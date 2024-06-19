import { createAction, props } from "@ngrx/store";
import { RegistrationModel } from "src/app/models/registration-model";

export const registration = createAction('registration',props<{registerData : RegistrationModel}>());

export const registrationSuccess = createAction('registerationSuccess',props<{isApiSuccess : boolean}>());

export const registrationFail = createAction('registrationFail',props<{errorMessage : string}>());