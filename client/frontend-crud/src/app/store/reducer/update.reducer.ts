// import { createReducer, on } from "@ngrx/store";
// import { userEntity } from "../state/Entity/entity-state";
// import { updatedata, updatedataFail, updatedataSuccess } from "../action/update.action";
//
// const _updateReducer = createReducer(userEntity,
//
//     on(updatedata, (state,updatedata) => {
//         return {
//             ...state,
//             ...updatedata
//         }
//     }),
//
//     on(updatedataSuccess, (state,backendUpdatedData) => {
//         return {
//             ...state,
//             ...backendUpdatedData
//         }
//     }),
//
//     on(updatedataFail, (state,errorMessage) => {
//         return {
//             ...state,
//             ...errorMessage
//         }
//     }),
//
//
// )
//
// export function updateReducer(state : any , action : any){
//     return _updateReducer(state,action);
// }
