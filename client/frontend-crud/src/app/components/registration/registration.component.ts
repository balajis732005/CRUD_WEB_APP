import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { RegistrationModel } from 'src/app/models/registration-model';
import { registration } from 'src/app/store/action/register.action';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(
    private store : Store<AppState>,
    private toastr : ToastrService
  ) {}

  registrationForm = new FormGroup(
    {
      userName : new FormControl("",Validators.required),
      userEmail : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    }
  )

  onRegitrationFormSubmit() {

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    let userRegisterData : RegistrationModel = {
      userName : this.registrationForm.value.userName!,
      userEmail : this.registrationForm.value.userEmail!,
      password : this.registrationForm.value.password!
    }
      
    if(regexp.test(this.registrationForm.value.userEmail!)){

      this.toastr.info("Your have been Verified please we are sending and email to you","INFORMATION");

      this.store.dispatch(registration(
        {
          registerData : userRegisterData
        }
       )
      )

    }else{

        this.toastr.error("Invalid Register Credentials","ERROR");

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