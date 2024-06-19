import { createAction, props } from "@ngrx/store"

export const deleteUser = createAction('deleteUser',props<{idToDelete : number}>());

export const deleteUserSuccess = createAction('deleteUserSuccess',props<{id : number, userName : string, userEmail  : string, password : string}>());

export const deleteUserFail = createAction('deleteUserFail',props<{errorrmessage : string}>());