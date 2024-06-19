import { Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "src/app/services/login-service.service";
import { authentication, authenticationFail, authenticationSuccess } from "../action/login.action";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class AuthEffect {

    constructor(
        private actions$ : Actions,
        private router : Router,
        private loginService : LoginService,
        private toastr : ToastrService,
    ) {}

    loginEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authentication),
            mergeMap((actions) =>
                this.loginService.userLogin(actions.loginData).pipe(
                    map((backendDataByLogin) => {
                        if(backendDataByLogin!=null){
                            this.router.navigate(['/home']);
                            this.toastr.success("Login Successfully","SUCCESS");
                            return authenticationSuccess({
                                id : backendDataByLogin.id,
                                userName : backendDataByLogin.userName,
                                userEmail : backendDataByLogin.userEmail,
                                password : backendDataByLogin.password
                            });
                        }else{
                            this.toastr.error("Invalid Login Credentials","ERRORR");
                            return authenticationFail({errorMessage : "LoginAPiNotWorking"});
                        }
                    }),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

}
