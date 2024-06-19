// import { createReducer, on } from "@ngrx/store";
// import { apiCheck } from "../state/check/check-state";
// import { registerOtpVerify, registerOtpVerifyFail, registerOtpVerifySuccess } from "../action/registerotpverify.action";
//
// const _regiterOtpVerifyReducer = createReducer(apiCheck,
//
//     on(registerOtpVerify, (state,enterotpverifymodel) => {
//         return {
//             ...state,
//             ...enterotpverifymodel
//         }
//     }),
//
//     on(registerOtpVerifySuccess, (state,isApiSuccess) => {
//         return {
//             ...state,
//             ...isApiSuccess
//         }
//     }),
//
//     on(registerOtpVerifyFail, (state,errorrmesage) => {
//         return {
//             ...state,
//             ...errorrmesage
//         }
//     })
//
// )
//
// export function regiterOtpVerifyReducer(state : any , action : any) {
//     return _regiterOtpVerifyReducer(state,action);
// }
