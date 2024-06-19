import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/state/app-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private store : Store<AppState>,
  ) {
  }

  title = 'frontend-crud';

}
