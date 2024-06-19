import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UpdateService } from "src/app/services/update-service.service";
import { updatedata, updatedataFail, updatedataSuccess } from "../action/update.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class updateEffect {

    constructor(
        private actions$ : Actions,
        private updateService  :UpdateService,
        private toastr : ToastrService,
    ) {}

    updatedataEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updatedata),
            mergeMap((action) =>
                this.updateService.userUpdate(action.updatedData).pipe(
                    map((againData) => {
                        if(againData!=null){
                            this.toastr.success("User Credentials has been Updated Successfully","SUCCESS");
                            return updatedataSuccess({
                                id : againData.id,
                                userName : againData.userName,
                                userEmail : againData.userEmail,
                                password : againData.password
                            });
                        }else{
                            this.toastr.error("Invalid User Credentials","ERROR");
                            return updatedataFail({errorMessage : "UpdateApiNotWorking"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}
