import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { EntityModel } from 'src/app/models/entity-model';
import {updatedata, updatedataSuccess} from 'src/app/store/action/update.action';
import { getEntity } from 'src/app/store/selector/entity.selector';
import { AppState } from 'src/app/store/state/app-state';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(
    private store : Store<AppState>,
    private toastr : ToastrService,
    private router : Router
  ) {}

  Oldid! : number;

  ngOnInit(): void {

    this.store.dispatch(updatedataSuccess(
      {
        id : JSON.parse(localStorage.getItem('userEntityKey')!).id,
        userName : JSON.parse(localStorage.getItem('userEntityKey')!).userName,
        userEmail : JSON.parse(localStorage.getItem('userEntityKey')!).userEmail,
        password: JSON.parse(localStorage.getItem('userEntityKey')!).userPassword,
      }
    ))

    this.store.select(getEntity)
    .subscribe((data) => {
      console.log("DTA : ",data);
      this.Oldid=data.id;
      this.updateForm.setValue({
        userName : data.userName,
        userEmail : data.userEmail,
        password: data.password
      })
    })
  }

  updateForm = new FormGroup (
    {
      userName : new FormControl("",Validators.required),
      userEmail : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    }
  )

  userUpdate() {
    let newEntity : EntityModel = {
      id : this.Oldid,
      userName : this.updateForm.value.userName!,
      userEmail : this.updateForm.value.userEmail!,
      password : this.updateForm.value.password!
    }

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(regexp.test(newEntity.userEmail)){
      this.store.dispatch(updatedata(
        {
          updatedData : newEntity
        }
      ))
    }
    else{
      this.toastr.error("Invalid User Email Provided Please Check","ERROR");
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
