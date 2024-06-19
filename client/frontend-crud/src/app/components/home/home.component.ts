import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { EntityModel } from 'src/app/models/entity-model';
import { AppState } from 'src/app/store/state/app-state';
import { Store } from '@ngrx/store';
import { getEntity } from 'src/app/store/selector/entity.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router,
    private dialog : MatDialog,
    private store : Store<AppState>,
    private toastr : ToastrService
  ){}

  userData! : EntityModel;

  ngOnInit(): void {

    this.store.select(getEntity)
    .subscribe((data) => {
      this.userData=data;
    })

  }

  toUpdate() {

    this.toastr.info("You can Update Your Profile Here","INFORMATION");

    this.router.navigate(['/update']);

  }

  toDelete() {

    this.toastr.info("You can Delete Your Profile Here","INFORMATION");

    const dialogBox = this.dialog.open(DialogBoxComponent);

    dialogBox.afterClosed().subscribe((result) => {});

  }

}
