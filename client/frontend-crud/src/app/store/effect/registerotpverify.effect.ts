import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RegisterotpverifyService } from "src/app/services/registerotpverify.service";
import { registerOtpVerify, registerOtpVerifyFail, registerOtpVerifySuccess } from "../action/registerotpverify.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class RegisterOtpVerifyEffect {

    constructor(
        private actions$ : Actions,
        private router : Router,
        private registerOtpVerifyService : RegisterotpverifyService,
        private toastr : ToastrService
    ) {}

    regsiterOtp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerOtpVerify),
            mergeMap((action) => 
                this.registerOtpVerifyService.registerOtpVerify(action.enterotpverifymodel).pipe(
                    map((backendOtpBoolean) => {
                        if(backendOtpBoolean!=null && backendOtpBoolean){
                            this.toastr.success("your Email has been verified Successfully","SUCCESS");
                            this.router.navigate(['/login']);
                            return registerOtpVerifySuccess({isApiSuccess : backendOtpBoolean});
                        }else{
                            this.toastr.error("Invalid OTP given please check your OTP","ERRORR");
                            return registerOtpVerifyFail({errorrmesage : "RegisterOtpVerify Api not working"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}