// import { createReducer, on } from "@ngrx/store";
// import { forgetPasswordOtpVerify, forgetPasswordOtpVerifyFail, forgetPasswordOtpVerifySuccess } from "../action/forgetpasswordotpverify.action";
// import { forgetPasswordCheck } from "../state/forgetpassword/forgetpassword-state";
//
// const _forgetPasswordOtpVerifyReducer=createReducer(forgetPasswordCheck,
//
//     on(forgetPasswordOtpVerify, (state,forgetPasswordOtpVerifyData) => {
//         return {
//             ...state,
//             ...forgetPasswordOtpVerifyData
//         }
//     }),
//
//     on(forgetPasswordOtpVerifySuccess, (state,isNewPassword) => {
//         return {
//             ...state,
//             ...isNewPassword
//         }
//     }),
//
//     on(forgetPasswordOtpVerifyFail, (state,errorrmessage) => {
//         return {
//             ...state,
//             ...errorrmessage
//         }
//     })
//
// )
//
// export function forgetPasswordOtpVerifyReducer(state : any , action : any) {
//     return _forgetPasswordOtpVerifyReducer(state,action);
// }
