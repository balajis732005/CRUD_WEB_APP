import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NewpasswordchangeService } from "src/app/services/newpasswordchange.service";
import { newPasswordChange, newPasswordChangeFail, newPasswordChangeSuccess } from "../action/newpasswordchange.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class NewPasswordChangeEffect {

    constructor(
        private actions$ : Actions,
        private router : Router,
        private newPasswordChangeService : NewpasswordchangeService,
        private toastr : ToastrService
    ) {}

    newPasswordChangeEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(newPasswordChange),
            mergeMap((action) =>
                this.newPasswordChangeService.updatePasswordForForgetPassword(action.newPasswordChangeData).pipe(
                    map((bakcendDataForgetPasswordBoolean) => {
                        if(bakcendDataForgetPasswordBoolean){
                            this.router.navigate(['/login']);
                            this.toastr.success("Your password has been saved successfully Login with your new Password","SUCCESS");
                            return newPasswordChangeSuccess({isNewPassword : bakcendDataForgetPasswordBoolean});
                        }else{
                            this.toastr.error("There is some issue of updating your password","ERROR");
                            return newPasswordChangeFail({errorrmessage : "ForgetEmailSendApi is not working"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}