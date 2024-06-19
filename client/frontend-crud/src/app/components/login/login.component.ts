import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login-model';
import { authentication } from 'src/app/store/action/login.action';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private store : Store<AppState>,
    private toastr : ToastrService
  ) {}

  loginForm = new FormGroup(
    {
      userEmail : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    }
  )

  onLoginFormSubmit() {

    let userLogindata : LoginModel = {
      userEmail : this.loginForm.value.userEmail!,
      password : this.loginForm.value.password!
    }

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(regexp.test(this.loginForm.value.userEmail!)){

      this.store.dispatch(authentication(
        {
          loginData : userLogindata
        }
      ))

    }else{
      this.toastr.error("Invalid User Email provided Please Check","ERROR");
    }
  }

  show : boolean = true;

  passtype : string = "password";

  passworShowOrNot() {

    if(this.show){

      this.passtype="text";

      this.show=false;

    }
    else{

      this.passtype="password";

      this.show=true;

    }

  }

}
