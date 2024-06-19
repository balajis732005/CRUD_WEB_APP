import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DeleteService } from "src/app/services/delete-service.service";
import { deleteUser, deleteUserFail, deleteUserSuccess } from "../action/delete.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class DeleteEffect {

    constructor(
        private actions$ : Actions,
        private deleteService : DeleteService,
        private router : Router,
        private toastr : ToastrService
    ) {}

    deleteEffet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteUser),
            mergeMap((action) =>
                this.deleteService.userDelete(action.idToDelete).pipe(
                    map((backendBoolen) => {
                        if(backendBoolen!=null){
                            this.router.navigate(['/']);
                            this.toastr.success("Your Account has been Deleted Successfully","SUCCESS");
                            return deleteUserSuccess({
                                id : -1,
                                userName : "",
                                userEmail : "",
                                password : ""
                            })
                        }else{
                            this.toastr.error("Your can't be Deleted there is some issue please Login again","ERROR");
                            return deleteUserFail({
                                errorrmessage : "DeleteAPI is not working"
                            })
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );
}