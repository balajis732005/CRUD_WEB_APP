import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUser } from 'src/app/store/action/delete.action';
import { getEntity } from 'src/app/store/selector/entity.selector';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  constructor(
    private store : Store<AppState>
  ) {}

  idUser! : number;

  onDeleteAPiCall(){

    this.store.select(getEntity)
    .subscribe((data) => {
      this.idUser=data.id;
    })

    this.store.dispatch(deleteUser(
      {
        idToDelete : this.idUser
      }
    ))
    
  }

}
