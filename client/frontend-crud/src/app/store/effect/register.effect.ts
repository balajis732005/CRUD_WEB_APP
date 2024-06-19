import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RegistrationServiceService } from "src/app/services/registration-service.service";
import { registration, registrationFail, registrationSuccess } from "../action/register.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { Router } from "@angular/router";
import { RegistrationModel } from "src/app/models/registration-model";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class UserEffect {

    constructor(
        private actions$ : Actions,
        private registrationService : RegistrationServiceService,
        private router : Router,
        private toastr : ToastrService
    ) {}

    forOtpModel! : RegistrationModel;

    registrationEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registration),
            mergeMap((action) => 
                this.registrationService.userRegistration(action.registerData).pipe(
                    map((backEndDataByRegister) => {
                        console.log(backEndDataByRegister);
                        if(backEndDataByRegister!=null){
                            this.forOtpModel=action.registerData;
                            this.router.navigate(['/registerotpverify'],{queryParams:this.forOtpModel});
                            this.toastr.success("Email has been Sent Successfully Please Check your email and provide OTP","SUCCESS");
                            return registrationSuccess(backEndDataByRegister);
                        }else{
                            this.toastr.warning("User Already exists","WARNING");
                            return registrationFail({errorMessage : "RegisterNotWorking"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}