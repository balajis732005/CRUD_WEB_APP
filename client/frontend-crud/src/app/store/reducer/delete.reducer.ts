// import { createReducer, on } from "@ngrx/store";
// import { userEntity } from "../state/Entity/entity-state";
// import { deleteUser } from "../action/delete.action";
//
// export const _deleteReducer=createReducer(userEntity,
//
//     on(deleteUser, (state,idToDelete) => {
//         return {
//             ...state,
//             ...idToDelete
//         };
//     }),
//
//     on(deleteUser, (state,deleteModel) => {
//         return {
//             ...state,
//             ...deleteModel
//         };
//     }),
//
//     on(deleteUser, (state,errorrmessage) => {
//         return {
//             ...state,
//             ...errorrmessage
//         };
//     })
//
// )
//
// export function deleteReducer(state : any , action : any){
//     return _deleteReducer(state,action);
// }
