import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ForgetpasswordemailsendService } from "src/app/services/forgetpasswordemailsend.service";
import { forgetPasswordEmailSend, forgetPasswordEmailSendFail, forgetPasswordEmailSendSuccess } from "../action/forgetpasswordemailsend.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class ForgetPasswordEmailSendEffect {

    constructor(
        private actions$ : Actions,
        private forgetPasswordEmailSendService : ForgetpasswordemailsendService,
        private toastr : ToastrService
    ) {}

    forgetPasswordEmailSendEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(forgetPasswordEmailSend),
            mergeMap((action) =>
                this.forgetPasswordEmailSendService.emailSendForForgetPassword(action.forgetpasswordEMailData).pipe(
                    map((bakcendDataForgetPasswordBoolean) => {
                        if(bakcendDataForgetPasswordBoolean){
                            this.toastr.success("Email has been Sent Successfully Please Check your Inbox and provide OTP","SUCCESS");
                            return forgetPasswordEmailSendSuccess({isNewPassword : bakcendDataForgetPasswordBoolean});
                        }else{
                            this.toastr.error("There is and issue of sending Email Plese Check your Email","ERROR");
                            return forgetPasswordEmailSendFail({errorrmessage : "ForgetEmailSendApi is not working"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}