import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { RegisterOtpVerifyModel } from 'src/app/models/registerotpverify-model';
import { RegistrationModel } from 'src/app/models/registration-model';
import { registerOtpVerify } from 'src/app/store/action/registerotpverify.action';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-registerotpverify',
  templateUrl: './registerotpverify.component.html',
  styleUrls: ['./registerotpverify.component.css']
})
export class RegisterOtpVerifyComponent /*implements OnInit*/ {

  constructor(
    private router : ActivatedRoute,
    private store : Store<AppState>,
    private toastr : ToastrService
  ) {}

  forOtpModel! : RegistrationModel;

  ngOnInit(): void {

    this.router.queryParams.subscribe((params : any) => {
      this.forOtpModel=params;
    })

    this.toastr.success("Email has been sent successfully","SUCCESS");

    this.toastr.info("Please Check you Email Inbox","INFORMATION");

  }

  registrationForm = new FormGroup(
    {
      otp : new FormControl("",Validators.required)
    }
  )

  onOtpSubmit() {

    let totalOtpVerifyData : RegisterOtpVerifyModel = {otp : this.registrationForm.value.otp!,
      userName : this.forOtpModel.userName,
      userEmail : this.forOtpModel.userEmail,
      password : this.forOtpModel.password
    }

    this.store.dispatch(registerOtpVerify( 
      {
        enterotpverifymodel : totalOtpVerifyData
      }
    ))

  }

}