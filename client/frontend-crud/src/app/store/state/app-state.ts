import { EntityModel } from "src/app/models/entity-model";
import {ActionReducerMap} from "@ngrx/store";
import {reducer} from "../reducer/reducer";

export interface AppState {
    userEntity : EntityModel,
  //userEntityKey : EntityModel
}

// export const reducers: { userEntityKey: (state: any, action: any) => EntityModel } = {
//   userEntityKey: reducer
// };
