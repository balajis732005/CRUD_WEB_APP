import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';

getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: ['userEntity'],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
});
