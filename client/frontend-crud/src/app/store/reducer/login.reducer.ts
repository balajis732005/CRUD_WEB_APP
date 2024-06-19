// import { createReducer, on } from "@ngrx/store";
// import { userEntity } from "../state/Entity/entity-state";
// import { authentication, authenticationFail, authenticationSuccess } from "../action/login.action";
// import {browserRelodeAction} from "../action/browserrelode.action";
//
// const _authReducer = createReducer(userEntity,
//
//     on(authentication, (state,userEntity) => {
//         return {
//             ...state,
//             ...userEntity
//         }
//     }),
//
//     on(authenticationSuccess, (state,loginData) => {
//         return {
//             ...state,
//             ...loginData
//         }
//     }),
//
//     on(authenticationFail, (state,errorMessage) => {
//         return {
//             ...state,
//             ...errorMessage
//         }
//     })
//
// )
//
// export function authReducer(state : any , action : any){
//     return _authReducer(state,action);
// }
