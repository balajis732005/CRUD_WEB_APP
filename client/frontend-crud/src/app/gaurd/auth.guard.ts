import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app-state';
import { getEntity } from '../store/selector/entity.selector';

export const authGuard: CanActivateFn = (route, state) => {

  const currentmenu = route.url[0].path;

  const router=inject(Router);

  const store=inject(Store<AppState>);

  if(((currentmenu=='home' || currentmenu=='update' || currentmenu=='forgetpassword' || currentmenu=='newpassword') && localStorage.getItem("userEmailLocal")=="")){


    router.navigate(['/']).then(r => true);

    return false;

  }

  return true;

};
