import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { forgetPasswordEmailSend } from 'src/app/store/action/forgetpasswordemailsend.action';
import { forgetPasswordOtpVerify } from 'src/app/store/action/forgetpasswordotpverify.action';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(
    private store :Store<AppState>,
    private toastr : ToastrService
  ) {}

  ngOnInit(): void {

    this.toastr.info("You have verify your Email before Update Your password","INFORMATION");

  }

  emailEnterForm = new FormGroup(
    {
      userEmail : new FormControl("",Validators.required)
    }
  )

  otpEnterForm = new FormGroup(
    {
      otp : new FormControl("",Validators.required)
    }
  )

  onEmailEnterSubmit(){

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(regexp.test(this.emailEnterForm.value.userEmail!)){

      this.toastr.info("Please wait until we sent an email to you given Email ID","INFORMATION");

      this.store.dispatch(forgetPasswordEmailSend(
        {
          forgetpasswordEMailData : { userEmail : this.emailEnterForm.value.userEmail! }
        }
      ))

    }
    else{

      this.toastr.error("Invalid User Email provided Please Check","ERROR");

    }

  }

  onOtpEnterSubmit() {

    this.store.dispatch(forgetPasswordOtpVerify(
      {
        forgetPasswordOtpVerifyData : { userEmail : this.emailEnterForm.value.userEmail! ,
                                        otp : this.otpEnterForm.value.otp!}
      }
    ))

  }

}
