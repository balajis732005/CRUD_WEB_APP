// import { createReducer, on } from "@ngrx/store";
// import { forgetPasswordCheck } from "../state/forgetpassword/forgetpassword-state";
// import { forgetPasswordEmailSend, forgetPasswordEmailSendFail, forgetPasswordEmailSendSuccess } from "../action/forgetpasswordemailsend.action";
//
// const _forgetPasswordEmailSendReducer = createReducer(forgetPasswordCheck,
//
//     on(forgetPasswordEmailSend, (state,forgetpasswordEMailData) => {
//         return {
//             ...state,
//             ...forgetpasswordEMailData
//         }
//     }),
//
//     on(forgetPasswordEmailSendSuccess, (state,isNewPassword) => {
//         return {
//             ...state,
//             ...isNewPassword
//         }
//     }),
//
//     on(forgetPasswordEmailSendFail, (state,errorrmessage) => {
//         return {
//             ...state,
//             ...errorrmessage
//         }
//     })
//
// )
//
// export function forgetPasswordEmailSendReducer(state : any , action : any) {
//     return _forgetPasswordEmailSendReducer(state,action);
// }
