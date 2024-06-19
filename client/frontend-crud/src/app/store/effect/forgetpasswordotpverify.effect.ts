import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ForgetpasswordotpverifyService } from "src/app/services/forgetpasswordotpverify.service";
import { forgetPasswordOtpVerify, forgetPasswordOtpVerifyFail, forgetPasswordOtpVerifySuccess } from "../action/forgetpasswordotpverify.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class ForgetPasswordOtpVerifyEffect {

    constructor(
        private actions$ : Actions,
        private router : Router,
        private forgetPasswordOtpVerifyService : ForgetpasswordotpverifyService,
        private toastr : ToastrService
    ) {}

    forgetPasswordOtpVerifyEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(forgetPasswordOtpVerify),
            mergeMap((action) =>
                this.forgetPasswordOtpVerifyService.otpVerifyForForgetPassword(action.forgetPasswordOtpVerifyData).pipe(
                    map((bakcendDataForgetPasswordBoolean) => {
                        if(bakcendDataForgetPasswordBoolean){
                            this.router.navigate(['/newpassword'],{queryParams : {data : action.forgetPasswordOtpVerifyData.userEmail}});
                            this.toastr.success("OTP has been verified successfully","SUCCESS");
                            return forgetPasswordOtpVerifySuccess({isNewPassword : bakcendDataForgetPasswordBoolean});
                        }else{
                            this.toastr.error("Invalid OTP has been Provided","ERROR");
                            return forgetPasswordOtpVerifyFail({errorrmessage : "ForgetEmailSendApi is not working"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}