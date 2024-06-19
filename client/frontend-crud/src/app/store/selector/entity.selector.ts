import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityModel } from "src/app/models/entity-model";

export const getEntity = createFeatureSelector<EntityModel>('userEntity');