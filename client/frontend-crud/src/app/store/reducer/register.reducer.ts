// import { createReducer, on } from "@ngrx/store";
// import { registration, registrationFail, registrationSuccess } from "../action/register.action";
// import { apiCheck } from "../state/check/check-state";
//
// const _userReducer = createReducer(apiCheck,
//
//     on(registration, (state,registerData) => {
//         return {
//             ...state,
//             ...registerData
//         };
//     }),
//
//     on(registrationSuccess, (state,isApiSuccess) => {
//         return {
//             ...state,
//             ...isApiSuccess
//         }
//     }),
//
//     on(registrationFail, (state,errorMessage) => {
//         return {
//             ...state,
//             ...errorMessage
//         }
//     }),
//
// )
//
// export function userReducer(state : any , action : any) {
//     return _userReducer(state,action);
// }
