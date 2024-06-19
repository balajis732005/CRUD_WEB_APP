import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarafterlogin',
  templateUrl: './navbarafterlogin.component.html',
  styleUrls: ['./navbarafterlogin.component.css']
})
export class NavbarafterloginComponent {

  onLogOutFlushLocal() {
    localStorage.clear();
  }

}
