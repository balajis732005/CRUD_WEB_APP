// import { createReducer, on } from "@ngrx/store";
// import { forgetPasswordCheck } from "../state/forgetpassword/forgetpassword-state";
// import { newPasswordChange, newPasswordChangeFail, newPasswordChangeSuccess } from "../action/newpasswordchange.action";
//
// const _newPasswordChangeReducer=createReducer(forgetPasswordCheck,
//
//     on(newPasswordChange, (state,newPasswordChangeData) => {
//         return {
//             ...state,
//             ...newPasswordChangeData
//         }
//     }),
//
//     on(newPasswordChangeSuccess, (state,isNewPassword) => {
//         return {
//             ...state,
//             ...isNewPassword
//         }
//     }),
//
//     on(newPasswordChangeFail, (state,errorrmessage) => {
//         return {
//             ...state,
//             ...errorrmessage
//         }
//     })
//
// )
//
// export function newPasswordChangeReducer(state : any , action : any) {
//     return _newPasswordChangeReducer(state,action);
// }
