import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { newPasswordChange } from 'src/app/store/action/newpasswordchange.action';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  constructor(
    private router : ActivatedRoute,
    private store : Store<AppState>,
    private toastr : ToastrService
  ) {}

  routeUserEmail! : string;

  ngOnInit(): void {

    this.toastr.info("Here you can your new password","INFORMATION");

    this.router.queryParams.subscribe((params : any) => {
      this.routeUserEmail=params.data;
    })
      
  }

  newPasswordEnterForm = new FormGroup(
    {
      newPassword  : new FormControl("",Validators.required)
    }
  )

  onNewPasswordSubmit() {

    this.store.dispatch(newPasswordChange(
      {
        newPasswordChangeData : {userEmail : this.routeUserEmail , newPassword : this.newPasswordEnterForm.value.newPassword!}
      }
    ))

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
