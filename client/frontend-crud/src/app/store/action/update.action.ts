import { createAction, props } from "@ngrx/store"
import { EntityModel } from "src/app/models/entity-model"

export const updatedata = createAction("updatedata",props<{updatedData : EntityModel}>());

export const updatedataSuccess = createAction("updatedataSuccess",props<{id : number, userName : string, userEmail : string, password : string}>());

export const updatedataFail = createAction("updatedataFail",props<{errorMessage : string}>());